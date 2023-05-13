import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietplanComponent } from './dietplan/dietplan.component';
import { ForumComponent } from './forum/forum.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './home/product/product.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { CreateComponent } from './create/create.component';


const routes: Routes = [
  {path:"menubar",component:MenubarComponent,
  children:[
    {path:"home",component:HomeComponent},
    {path:"p-details",component:ProductComponent},
    {path:"Dietplan",component:DietplanComponent},
  {path:"Create",component:CreateComponent},
  {path:"Forum",component:ForumComponent},
  {path:"Suggestion",component:SuggestionComponent}
 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
