import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule,Router } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent} from './first.component';
import { SecondComponent} from './second.component';

@NgModule({
  declarations: [
    AppComponent,FirstComponent,SecondComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([
      {path:'first.component', component:FirstComponent},
      {path:'second.component',component:SecondComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
