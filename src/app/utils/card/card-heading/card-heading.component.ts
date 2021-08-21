import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-heading',
  templateUrl: './card-heading.component.html',
  styleUrls: ['./card-heading.component.scss']
})
export class CardHeadingComponent implements OnInit {
  @Input() text = "";
  constructor() { }

  ngOnInit(): void {
  }

}
