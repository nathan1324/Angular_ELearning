import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuestionAnswerComponent } from './quiz-question/question-answer/question-answer.component';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [QuizComponent, 
    QuizQuestionComponent, 
    QuestionAnswerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'quiz', component: QuizComponent },
    ])
  ]
})


export class QuizModule { 

}

