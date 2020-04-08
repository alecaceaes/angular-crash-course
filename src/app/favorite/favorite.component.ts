import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
  // inputs: ['isFavorite']
})
export class FavoriteComponent implements OnInit {
  @Input('isFavorite') isSelected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }
}
