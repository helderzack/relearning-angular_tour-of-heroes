import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  // @Output() onDashboardClick = new EventEmitter();
  // @Output() onHeroesClick = new EventEmitter();

  onDashboardClick(): void {

  }

  onHeroesClick(): void {
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
