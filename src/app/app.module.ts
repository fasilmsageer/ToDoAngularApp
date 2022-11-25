import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToDoComponent } from './add-to-do/add-to-do.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { RouterModule } from '@angular/router';

const myRoute=[
  {
   path:"",
   component:AddToDoComponent
  },
  {
    path:"viewall",
    component:ViewAllComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddToDoComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
