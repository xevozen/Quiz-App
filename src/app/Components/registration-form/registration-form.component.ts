import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  name!:string;
  college!:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  startQuiz(){
    console.log(this.name);
    console.log(this.college);
    localStorage.setItem("name", this.name);
    localStorage.setItem("college", this.college);
    this.router.navigate(['/quiz-window']);
    // this.router.navigateByUrl('/quiz-window', { state: { hello: 'world' } });
  }
}
