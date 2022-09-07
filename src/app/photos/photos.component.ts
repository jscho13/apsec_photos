import { Component, OnInit } from '@angular/core';
import { Photo } from '../model/photo';
import { PhotoService } from '../model/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {
  photos: Photo[];

  constructor(public photoService: PhotoService) { 
    this.photos = [] as Photo[];
  }

  ngOnInit(): void {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }
}
