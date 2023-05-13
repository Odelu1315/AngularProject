import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-postresponse',
  templateUrl: './postresponse.component.html',
  styleUrls: ['./postresponse.component.css']
})
export class PostresponseComponent {

  id:any;
  forum:any;
  query:any;
  response:any;

 constructor(private ds:FormService,private ar:ActivatedRoute){
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

    this.ds.getForumById(this.id).subscribe({
       next: (data:any)=> this.forum=data,
       error: ()=> this.forum= {}
    })   
 }
 

 AddSuggestion(res:string){
  if (this.forum && this.forum.responses){
    this.forum.responses.push(res);
    this.ds.postSuggestion(this.forum).subscribe(
      {
        next:(data:any)=>{
          alert("suggestion posted");
          location.reload();
        },
        error:(error)=>alert("suggestion not posted")
      });
  }
  
}

}
