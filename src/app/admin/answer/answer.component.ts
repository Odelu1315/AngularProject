import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
  answerlist:any;
  query:any;
  id:any;
  data:any;



  constructor(private fs:FormService){
    this.fs.getsugge().subscribe(
      {
        next: (data:any)=> this.answerlist =data,
        error: ()=> this.answerlist=[]
      }
    )
  }
  AddQuestion(){
    var f:any={
      id:this.answerlist.length+1,
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
