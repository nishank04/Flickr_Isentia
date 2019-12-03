import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { FlickrComponent } from './flickr/flickr.component';
import { FlickrService } from './flickr.service';

@NgModule({
  declarations: [AppComponent, FlickrComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserAnimationsModule,
    InfiniteScrollModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
