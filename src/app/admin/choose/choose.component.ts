import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
  constructor(private router:Router,private ar:ActivatedRoute) { }
  postres(){
    this.router.navigate(['Postres'],{relativeTo:this.ar})
  }
 
  answer(){
    this.router.navigate(['Answer'],{relativeTo:this.ar})
  }
  products(){
    this.router.navigate(['Products'],{relativeTo:this.ar})
  }
  logout() { this.router.navigate(['/login']); }


}
