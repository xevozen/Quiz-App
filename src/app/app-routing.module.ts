import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizWindowComponent } from './Components/quiz-window/quiz-window.component';
import { RegistrationFormComponent } from './Components/registration-form/registration-form.component';
import { ScoreBoardComponent } from './Components/score-board/score-board.component';

const routes: Routes = [
  { path : '', component: RegistrationFormComponent},
  { path : 'quiz-window', component: QuizWindowComponent},
  { path : 'score-board', component: ScoreBoardComponent},
  { path : '**', component: RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
