import { Component }	from '@angular/core';

import { Component }	from './hero.service';
import { Component }	from '.heroes.component';
@Component({
	selector: 'my-app',
	template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
    `,
    directives: [HeroesComponent],
    providers: [
	    HeroService
	  ]
})

export class AppComponent {
	title = 'Tour of Heroes';
}