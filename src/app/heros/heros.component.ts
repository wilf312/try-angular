import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';

import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }
}
