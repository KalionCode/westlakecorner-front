import { Component, Input, OnInit } from '@angular/core';

import {ENDPOINT_ROOT} from '../../../app.config';
import {ItemModel} from '../../../models/Item.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() item:ItemModel = {
    name:'',
    description: '',
    created: ''
  } ;
  ENDPOINT_ROOT = ENDPOINT_ROOT;

  constructor() { }

  ngOnInit(): void {
  }

}
