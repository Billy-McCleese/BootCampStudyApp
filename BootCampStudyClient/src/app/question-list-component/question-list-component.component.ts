import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Question } from '../question';

@Component({
  selector: 'app-question-list-component',
  templateUrl: './question-list-component.component.html',
  styleUrls: ['./question-list-component.component.css']
})
export class QuestionListComponentComponent implements OnInit {
  questions?: Question[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.apiService.getAllQuestions().subscribe(
      (questions: Question[]) => {
        this.questions = questions;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // Call the API service method to mark the question as a favorite
    // and handle the response or error accordingly

  markAsFavorite(question: Question) {
    
  }
}

