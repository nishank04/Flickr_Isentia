import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../flickr.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-flickr',
  templateUrl: './flickr.component.html',
  styleUrls: ['./flickr.component.scss']
})
export class FlickrComponent implements OnInit {

  searchControl = new FormControl();
  model$: Observable<string>;
  photos = [];
  searchQuery = "random,images";

  constructor(private formBuilder: FormBuilder, private flickrService: FlickrService) { }

  ngOnInit() {
    this.getPhotos(this.searchQuery);
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((query: string) => this.flickrService.getResult(query))
      .subscribe(value => {
        this.searchQuery = this.searchControl.value;
        this.photos = value;
      });
  }
  getPhotos(query) {  
    this.flickrService.getResult(query)
      .subscribe(value => {
        for (const values of value) { this.photos.push(values) }
      });  
  } 
  onScroll()  
  {  
    this.getPhotos(this.searchQuery);
  }  

}
