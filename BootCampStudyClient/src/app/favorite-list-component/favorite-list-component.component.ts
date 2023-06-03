import { Component, OnInit } from '@angular/core';
import { Favorite } from '../favorite';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-favorite-list-component',
  templateUrl: './favorite-list-component.component.html',
  styleUrls: ['./favorite-list-component.component.css']
  
  
})
  export class FavoriteListComponentComponent implements OnInit  {
    favorites: Favorite[] = [];
    newFavorite: Favorite;
    
    
  
    constructor(private apiService: ApiService) {
     this.newFavorite = {} as Favorite;
      
    }
  
    ngOnInit() {
      this.getFavorites();
    }
  
    getFavorites() {
      this.apiService.getFavorites().subscribe(
        (favorites: Favorite[]) => {
          this.favorites = favorites;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  
    addFavorite() {
      const newFavorite: Favorite = {
        id: 0,
        userId: 0,
        questionId: 0
      };
      this.apiService.addFavorite(newFavorite).subscribe(
        (newFavorite: Favorite) => {
          // Handle success
          console.log('Favorite added:', newFavorite);
          // Refresh the list of favorites
          this.getFavorites();
          
        },
        (error) => {
          // Handle error
          console.log('Error:', error);
        }
      );
    }
  
    removeFavorite(favorite: Favorite) {
      this.apiService.removeFavorite(favorite.id).subscribe(
        () => {
          // Handle success
          console.log('Favorite removed:', favorite);
          // Refresh the list of favorites
          this.getFavorites();
        },
        (error) => {
          // Handle error
          console.log('Error:', error);
        }
      );
    }
  
    updateFavorite(favorite: Favorite) {
      this.apiService.updateFavorite(favorite).subscribe(
        (updatedFavorite: Favorite) => {
          // Handle success
          console.log('Favorite updated:', updatedFavorite);
          // Refresh the list of favorites
          this.getFavorites();
        },
        (error) => {
          // Handle error
          console.log('Error:', error);
        }
      );
    }
  }
  