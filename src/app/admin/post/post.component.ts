import { Component } from '@angular/core';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  forumlist:any;
  query:any;
  id:any;
  data:any;



  constructor(private fs:FormService){
    this.fs.getForum().subscribe(
      {
        next: (data:any)=> this.forumlist =data,
        error: ()=> this.forumlist=[]
      }
    )
  }
  AddQuestion(){
    var f:any={
      id:this.forumlist.length+1,
      question:this.query,
      responses:[]
    }
    this.fs.postquery(f).subscribe(
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
