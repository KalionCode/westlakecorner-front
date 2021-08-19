import { Component, Input, OnInit } from '@angular/core';

import {ENDPOINT_ROOT} from '../../../app.config';
import {ItemModel} from '../../../models/Item.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
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
