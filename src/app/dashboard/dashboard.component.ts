import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  topHeroes!: Hero[];

  constructor(private heroService: HeroService) { }

  getTopHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.topHeroes = heroes.filter(hero => hero.id < 16));
  }

  ngOnInit(): void {
    this.getTopHeroes();
  }
}
