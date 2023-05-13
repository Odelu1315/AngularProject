import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ChooseComponent } from './choose/choose.component';
import { MaterialModule } from '../material/material.module';
import { PostComponent } from './post/post.component';
import { PostcardComponent } from './post/postcard/postcard.component';
import { PostresponseComponent } from './post/postresponse/postresponse.component';
import { FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AnswerComponent } from './answer/answer.component';
import { AnswercardComponent } from './answer/answercard/answercard.component';
import { AnswerresponseComponent } from './answer/answerresponse/answerresponse.component';
import { ProductlistComponent } from './productlist/productlist.component';


@NgModule({
  declarations: [
    ChooseComponent,
    PostComponent,
    PostcardComponent,
    PostresponseComponent,
    AddproductComponent,
    AnswerComponent,
    AnswercardComponent,
    AnswerresponseComponent,
    ProductlistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdminModule { }
