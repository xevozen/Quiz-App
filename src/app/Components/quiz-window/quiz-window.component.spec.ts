import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizWindowComponent } from './quiz-window.component';

describe('QuizWindowComponent', () => {
  let component: QuizWindowComponent;
  let fixture: ComponentFixture<QuizWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
