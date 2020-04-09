import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  // template: ''  
  styles: [
    `
    .fas, .far {
      color: green;
    }

    .fa-star {
      background-color: black;
    }
    `    
  ],
  styleUrls: ['./favorite.component.css']
  // inputs: ['isFavorite']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  constructor() { }

  onClick() {
    this.isSelected = !this.isSelected;

    this.click.emit({
      newValue: this.isSelected
    });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}
