import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemModel } from '../item-list/Item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemHttpServiceService {

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('http://127.0.0.1:8000/api/posts');

  }
}
