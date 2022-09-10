import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../entities/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() heroes!: Hero[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
