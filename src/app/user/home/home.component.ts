import { Component} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productlist:any;
  filteredList:any;
  types:string[]=[
    "All",
    "fruit",
    "vegetable",
    "Dry Fruit",
    "Salad",
    "Protein",
    "Leaf vegetable",
    "Pasta",
    "Burger",
    "Japanese",
    "Indian",
  ]
  selected:string="All";
  searchValue:string="";

  constructor(private ps:ProductService){
    this.ps.getProducts().subscribe(
      {
        next: (data:any)=> {
          this.productlist = data;
          this.filteredList = data;
        },
        error: ()=> {
          this.productlist=[];
          this.filteredList=[];
        }
      }
    )
  }

  

  filterProducts() {
    if (this.selected === "All") {
      this.filteredList = this.productlist;
    } else {
      this.filteredList = this.productlist.filter((product:any) => product.type === this.selected);
    }
    if (this.searchValue !== "") {
      this.filteredList = this.filteredList.filter((product:any) => product.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    }
  }

}
