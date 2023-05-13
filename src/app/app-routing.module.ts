import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './user/home/productdetails/productdetails.component';
import { DietdetailsComponent } from './user/dietplan/dietdetails/dietdetails.component';
import { ForumresponseComponent } from './user/forum/forumresponse/forumresponse.component';
import { SuggestionresponseComponent } from './user/suggestion/suggestionresponse/suggestionresponse.component';
import { PostresponseComponent } from './admin/post/postresponse/postresponse.component';
import { AnswerresponseComponent } from './admin/answer/answerresponse/answerresponse.component';

const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"post/:id",component:PostresponseComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"dietdetails/:id",component:DietdetailsComponent},
  {path:"forum/:id",component:ForumresponseComponent},
  {path:'p-details/:id',component:ProductdetailsComponent},
  {path:"sugg/:id",component:SuggestionresponseComponent},
  {path:"Answer/:id",component:AnswerresponseComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
