import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  title: string;

  constructor(){
    this.title = 'Quiz';
  }

  ngOnInit() {
  }

}
