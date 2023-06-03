import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Question } from '../question';

@Component({
  selector: 'app-question-detail-component',
  templateUrl: './question-detail-component.component.html',
  styleUrls: ['./question-detail-component.component.css']
})
export class QuestionDetailComponentComponent  implements OnInit {

  selectedQuestion: Question | undefined;
  // will Replace with the actual ID of the selected question
  selectedQuestionId: number = 5; 

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getQuestionById(this.selectedQuestionId);
  }

  getQuestionById(id: number) {
    this.apiService.getQuestionById(id).subscribe(
      (question: Question) => {
        this.selectedQuestion = question;
      },
      (error) => {
        console.log(error);
      }
    );
  }
// calling the API service to mark the question as a favorite
   
  markAsFavorite(question: Question) {
    
  }
}