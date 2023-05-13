import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from '../material/material.module';
import { DietplanComponent } from './dietplan/dietplan.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { ProductComponent } from './home/product/product.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { RouterModule } from '@angular/router';
import { DiettypeComponent } from './dietplan/diettype/diettype.component';
import { DietdetailsComponent } from './dietplan/dietdetails/dietdetails.component';
import { FormcardComponent } from './forum/formcard/formcard.component';
import { ForumresponseComponent } from './forum/forumresponse/forumresponse.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SuggestioncardComponent } from './suggestion/suggestioncard/suggestioncard.component';
import { SuggestionresponseComponent } from './suggestion/suggestionresponse/suggestionresponse.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CreateComponent } from './create/create.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MenubarComponent,
    HomeComponent,
    DietplanComponent,
    ForumComponent,
    ProductComponent,
    ProductdetailsComponent,
    TypefilterPipe,
    DiettypeComponent,
    DietdetailsComponent,
    FormcardComponent,
    ForumresponseComponent,
    SuggestionComponent,
    SuggestioncardComponent,
    SuggestionresponseComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    DragDropModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]    
      }
    })
  ],
  exports: [
    HomeComponent,
    MenubarComponent,
  ]
})
export class UserModule { }
