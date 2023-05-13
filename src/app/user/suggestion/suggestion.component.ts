import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent {
  suggestionlist:any;
  query:any;
  id:any;
  data:any;



  constructor(private fs:FormService){
    this.fs.getsugge().subscribe(
      {
        next: (data:any)=> this.suggestionlist =data,
        error: ()=> this.suggestionlist=[]
      }
    )
  }
  AddQuestion(){
    var f:any={
      id:this.suggestionlist.length+1,
      question:this.query,
      responses:[]
    }
    this.fs.postsugge(f).subscribe(
      {
        next:(f:any)=>{
          alert("question posted");
          location.reload();
        },
        error:(error)=>alert("not posted")
      }
    )
  }
}


