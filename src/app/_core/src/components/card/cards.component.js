import { Component } from '@angular/core';

import template from './cards.template.html';
import style from './cards.style.scss';

@Component({
  selector: 'cards',
  template,
  styles: [style],
  inputs: ['networks', 'prefix'],
})

export class Cards {
  constructor() {
  }
}