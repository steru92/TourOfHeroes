import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  loadHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadHeroes();
  }
}
