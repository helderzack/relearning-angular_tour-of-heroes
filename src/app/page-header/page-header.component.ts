import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
  @Input() currentComponent!: string;
  @Output() onDashboardClick = new EventEmitter();
  @Output() onHeroesClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
