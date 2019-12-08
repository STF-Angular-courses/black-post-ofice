import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostOfficeListComponent } from './post-office-list/post-office-list.component';
import { PostOfficeItemComponent } from './post-office-item/post-office-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostOfficeListComponent,
    PostOfficeItemComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
