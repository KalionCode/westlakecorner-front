import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemModel } from '../models/Item.model';
import { ENDPOINT_ROOT, ENDPOINTS } from '../app.config'

@Injectable({
  providedIn: 'root',
})
export class ItemHttpServiceService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(ENDPOINT_ROOT+ENDPOINTS.posts);

  }
}
