import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  name!:string|null;
  college!:string|null;
  score!:string|null;
  constructor(public router:Router) { }

  ngOnInit(): void {
    console.log("Initialized")
    this.name = localStorage.getItem("name");
    this.college = localStorage.getItem("college");
    this.score = localStorage.getItem("score");
    if (this.name == null || this.college == null || this.score == null) {
      this.router.navigate(['/']);
    }
    else {
      console.log(this.name);
      console.log(this.college);
      console.log(this.score);
    }
    localStorage.removeItem('name');
    localStorage.removeItem('college');
    localStorage.removeItem('score');
    // localStorage.setItem("name", "");
    // localStorage.setItem("college", "");
  }
}
