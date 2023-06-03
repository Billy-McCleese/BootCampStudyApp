import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question';
import { Favorite } from './favorite';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://localhost:7185/api'; // Update with your API endpoint

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseUrl}/Questions`);
  }
  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.baseUrl}/Questions/${id}`);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(`${this.baseUrl}/questions`, question);
  }

  updateQuestion(id: number, question: Question): Observable<Question> {
    return this.http.put<Question>(`${this.baseUrl}/questions/${id}`, question);
  }

  deleteQuestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/questions/${id}`);
  }
  getFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(`${this.baseUrl}/favorites/id`);
  }

  addFavorite(favorite: Favorite): Observable<Favorite> {
    return this.http.post<Favorite>(`${this.baseUrl}/favorites/id`, favorite);
  }

  removeFavorite(favoriteId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/favorites/${favoriteId}`);
  }

  updateFavorite(favorite: Favorite): Observable<Favorite> {
    return this.http.put<Favorite>(`${this.baseUrl}/favorites/${favorite.id}`, favorite);
  }

  
}



