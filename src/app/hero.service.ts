import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { mockHeroes } from './mock-heroes';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHero(id : number) : Observable<Hero> {
    const hero = of(mockHeroes.find(x => x.id === id));
    this.messageService.add(`HeroService: fetched hero (id=${id})`);
    return hero;
  }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(mockHeroes);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  constructor(private messageService : MessageService) { }
}
