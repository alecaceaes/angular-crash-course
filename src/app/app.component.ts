import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  // onFavoriteChanged(isFavorite) {
  //   console.log("Favorite changed: ", isFavorite);
  // onFavoriteChanged(eventArgs) {
  //   console.log("Favorite changed: ", eventArgs);  
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }
}
