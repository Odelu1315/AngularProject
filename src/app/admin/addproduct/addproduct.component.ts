import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  id:any;
   name:any;
   type:any;
   price:any;
   image:any;
   calories:any;
   carbohydrates:any;
   fiber:any;
   protein:any;
   fat:any;
   quantity:any;
   errors:string[]=[];

  
  constructor(private hs:ProductService) { }
   submit(){
    this.errors = []
 if(this.name==undefined || this.name.length<3)
this.errors.push("Name should be greater than 3 characters")
 if(this.type==undefined )
 this.errors.push("type is required")
  if(this.price==undefined )
   this.errors.push("Price is required")
   if(this.calories==undefined )
   this.errors.push("Price is required")
   if(this.carbohydrates==undefined )
   this.errors.push("Price is required")
   if(this.fiber==undefined )
   this.errors.push("Price is required")
   if(this.protein==undefined )
   this.errors.push("Price is required")
   if(this.fat==undefined )
   this.errors.push("Price is required")
   if(this.image==undefined )
   this.errors.push("image is required")
   
if(this.quantity==undefined)
this.errors.push("atleast 1 character")
 if(this.errors.length==0){
   let obj={
     id:Math.round(Math.random()*100000),
      name:this.name,
         type:this.type,
         price:this.price,
         image:this.image,
         calories:this.calories,
         carbohydrates:this.carbohydrates,
         fiber:this.fiber,
         protein:this.protein,
         fat:this.fat,

         quantity:this.quantity
         }
          this.hs.postProducts(obj).subscribe({
             next: ()=>{
               alert("Successfully Added .Thank you..")
                this.name="",
                this.type="",
                this.price="",
                this.image="",
                this.calories="",
                this.carbohydrates="",
                this.fat="",
                this.fiber="",
                this.protein="",
               
                this.quantity=""
              },
              error: ()=>alert("There is a problem in adding this!")
             })
            }
          }
}
