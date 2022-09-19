import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HEROES } from '../heroes';
import { Hero } from '../interfaces/hero';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messagesService.add(`Hero Service feteched hero id=${id}`);
    return of(hero);
  }
}
