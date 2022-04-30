import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allQuestion } from '../allQuestions';

@Component({
  selector: 'app-quiz-window',
  templateUrl: './quiz-window.component.html',
  styleUrls: ['./quiz-window.component.css']
})
export class QuizWindowComponent implements OnInit {
  name!: string | null;
  college!: string | null;
  option = null;
  questionNo = 0;
  score = 0;
  responseArray: number[] = [];
  currentQ!: allQuestion;
  allQuestions: allQuestion[] = [
    {
      question: "TypeScript is a ___?",
      opA: "strongly typed",
      opB: "object oriented",
      opC: "compiled language",
      opD: "All of the above",
      ans: 4
    },
    {
      question: "Which of the following are features of typeScript?",
      opA: "TypeScript is just JavaScript",
      opB: "TypeScript supports other JS libraries",
      opC: "TypeScript is portable",
      opD: "All of the above",
      ans: 4
    },
    {
      question: "Extension of typescript is?",
      opA: ".ty",
      opB: ".tp",
      opC: ".ts",
      opD: ".td",
      ans: 3
    },
    {
      question: "TypeScript supports Object Oriented Programming concepts like classes, interfaces, inheritance.",
      opA: "TRUE",
      opB: "FALSE",
      opC: "Can be true or false",
      opD: "Can not say",
      ans: 1
    },
    {
      question: "How many components typescript has?",
      opA: "2",
      opB: "3",
      opC: "4",
      opD: "5",
      ans: 2
    },
    {
      question: "TypeScript is ?",
      opA: "case-sensitive",
      opB: "Case-insensitive",
      opC: "depends on typescript version",
      opD: "Can not say",
      ans: 1
    },
    {
      question: "TypeScript supports how many types of comments?",
      opA: "1",
      opB: "2",
      opC: "3",
      opD: "4",
      ans: 2
    },
    {
      question: "According to Grady Brooch, every object must have _________ features.",
      opA: "1",
      opB: "2",
      opC: "3",
      opD: "4",
      ans: 3
    },
    {
      question: "A ________ in terms of OOP is a blueprint for creating objects.",
      opA: "constructor",
      opB: "method",
      opC: "function",
      opD: "class",
      ans: 4
    },
    {
      question: "Semicolons are optional in TypeScript.",
      opA: "Yes",
      opB: "No",
      opC: "Can be yes or no",
      opD: "Can not say",
      ans: 1
    }
  ];


  constructor(public router: Router) {
    console.log("constructer called");
    this.currentQ = {
      question: "",
      opA: "",
      opB: "",
      opC: "",
      opD: "",
      ans: 0
    }
  }

  ngOnInit(): void {
    console.log("Initialized")
    this.name = localStorage.getItem("name");
    this.college = localStorage.getItem("college");
    if (this.name == null || this.college == null) {
      this.router.navigate(['/']);
    }
    else {
      console.log(this.name);
      console.log(this.college);
      this.questionNo = 0;
      console.log(this.questionNo);
      // this.responseArray[0] = 0;
      this.responseArray.push(0);
      this.currentQ = this.allQuestions[this.questionNo];
      console.log(this.responseArray);
    }
    localStorage.removeItem('name');
    localStorage.removeItem('college');
    // localStorage.setItem("name", "");
    // localStorage.setItem("college", "");
  }
  reset_options() {
    this.option = null;
  }
  saveResponse(response: number) {
    console.log(response);
    this.responseArray[this.questionNo] = response;
    console.log(this.responseArray);
    //console.log(this.option);
  }
  submit() {
    this.reset_options();
    for (let index: number = 0; index < this.responseArray.length; index++) {
      if (this.responseArray[index] == this.allQuestions[index].ans) {
        this.score++;
      }
    }
    localStorage.setItem("score", this.score.toString());
    localStorage.setItem("name", this.name != null ? this.name : "");
    localStorage.setItem("college", this.college != null ? this.college : "");
    console.log(this.score);
    this.router.navigate(['/score-board']);
  }
  previous() {
    this.reset_options();
    if (this.questionNo != 0) {
      this.questionNo--;
      this.currentQ = this.allQuestions[this.questionNo];
    }
  }
  next() {
    this.reset_options();
    if (this.questionNo != this.allQuestions.length - 1) {
      this.questionNo++;
      this.currentQ = this.allQuestions[this.questionNo];
      if (this.responseArray.length <= this.questionNo) {
        this.responseArray.push(0);
      }
    }
    console.log(this.responseArray);
  }
}
