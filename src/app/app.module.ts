import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostOfficeListComponent } from './post-office-list/post-office-list.component';
import { PostOfficeItemComponent } from './post-office-item/post-office-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule} from '@angular/material';
import { PackageItemComponent } from './package-item/package-item.component';
import { PackageListComponent } from './package-list/package-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostOfficeListComponent,
    PostOfficeItemComponent,
    PackageItemComponent,
    PackageListComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
