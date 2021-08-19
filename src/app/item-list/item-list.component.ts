import { Component, OnInit } from '@angular/core';
import { ItemModel } from './Item.model';
import { ItemHttpServiceService } from '../services/item-http-service.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  providers: [ItemHttpServiceService],
})
export class ItemListComponent implements OnInit {
  posts:any = [];
  constructor( private itemService:ItemHttpServiceService ) { }

  ngOnInit(): void {
    this.itemService.getPosts().subscribe((data)=>{
      this.posts = data;
    });
  }

}
