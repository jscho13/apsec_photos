import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  public getPhotos(): Observable<Photo[]> {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    return this.http.get<Photo[]>(url);
  }
}

