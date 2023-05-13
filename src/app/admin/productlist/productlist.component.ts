import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {   products:any;
   dataSource:any;
   element:any;
  //  edit={
  //   id:"",name:"",quantity:"",type:""
  //  }
   displayedColumns:string[]=['id','name','type','quantity','act'];
   constructor(public dialog: MatDialog, public ps: ProductService){
    this.ps.getProducts().subscribe(
      {
        next:(data:any)=>{
          this.products=data
          this.dataSource =new MatTableDataSource(this.products)

        },
        error:()=>this.products=[]
      },
    )

   }
   openDialog(){
    this.dialog.open(AddproductComponent)
   }
   delete(element:any){
    this.ps.deleteProduct(element.id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      err=>{
        console.log(err);
      }
    );
   }
}
