import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './Components/registration-form/registration-form.component';
import { QuizWindowComponent } from './Components/quiz-window/quiz-window.component';
import { FormsModule } from '@angular/forms';
import { ScoreBoardComponent } from './Components/score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    QuizWindowComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
