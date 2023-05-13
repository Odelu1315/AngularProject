import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ProductService } from 'src/app/services/product.service';

interface Product {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  
  }
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  products:any;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
        this.calculateNutrition();
      },
      error: () => {
        this.products = [];
      }
    });
  }

  basket: any[] = [];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const draggedItem = event.previousContainer.data[event.previousIndex];
      const itemName = typeof draggedItem === 'object' ? draggedItem.name : draggedItem;
      const itemQuantity = typeof draggedItem === 'object' ? draggedItem.quantity : 1;
      this.basket.splice(event.currentIndex, 0, { name: itemName, quantity: itemQuantity });
    }
}
clearBasket() {
this.basket = [];
}

totalCalories: number = 0;
totalFat: number = 0;
totalProtein: number = 0;
totalCarbs: number = 0;

calculateNutrition() {
this.totalCalories = 0;
this.totalFat = 0;
this.totalProtein = 0;
this.totalCarbs = 0;
for (let item of this.basket) {
const product = this.products.find((p: { name: any; }) => p.name === item.name);
if (product) {
  const { Calories, Fat, Protein, Carbohydrates } = product;
  this.totalCalories += (item.quantity / 100) * Calories;
  this.totalFat += (item.quantity / 100) * Fat;
  this.totalProtein += (item.quantity / 100) * Protein;
  this.totalCarbs += (item.quantity / 100) * Carbohydrates;

} else {
  console.log(`Product not found for item ${item.name}`);
}
}
}
}
