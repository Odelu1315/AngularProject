import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietserviceService } from 'src/app/services/dietservice.service';

@Component({
  selector: 'app-dietdetails',
  templateUrl: './dietdetails.component.html',
  styleUrls: ['./dietdetails.component.css']
})
export class DietdetailsComponent {

  id:any;
  dietdetails:any;
 constructor(private ds:DietserviceService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['id']
         this.readData()
        },
        error: () => this.id = 0
      }
    )
 }
 readData(){

    this.ds.getDietById(this.id).subscribe({
       next: (data:any)=> this.dietdetails =data,
       error: ()=> this.dietdetails = {}
    })
 }

}
