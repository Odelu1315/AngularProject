import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';
import { PostComponent } from './post/post.component';
import { AnswerComponent } from './answer/answer.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:"choose",component:ChooseComponent,
  children:[
    {path:"Postres",component:PostComponent},
   
    {path:"Products",component:ProductlistComponent},
   
    {path:"Answer",component:AnswerComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
