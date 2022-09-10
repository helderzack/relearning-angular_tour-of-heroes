import { Component } from '@angular/core';
import { heroes } from './heroes';
import { Hero } from './entities/Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour-of-heroes';
  currentComponent = 'dashboard'; 
  
  heroes: Hero[] = heroes;
  topHeroes = heroes.filter(hero => hero.id < 16);

  showDashboard() {
    if(this.currentComponent !== 'dashboard')
    this.currentComponent = 'dashboard';
  }

  showHeroes() {
    if(this.currentComponent !== 'heroes')
    this.currentComponent = 'heroes';
  }

  showHeroDetails() {
    if(this.currentComponent !== 'hero details')
    this.currentComponent = 'hero details';
  }
}
