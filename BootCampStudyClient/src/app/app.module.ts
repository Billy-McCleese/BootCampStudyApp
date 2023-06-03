import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponentComponent } from './question-list-component/question-list-component.component';
import { QuestionDetailComponentComponent } from './question-detail-component/question-detail-component.component';
import { FavoriteListComponentComponent } from './favorite-list-component/favorite-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponentComponent,
    QuestionDetailComponentComponent,
    FavoriteListComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
