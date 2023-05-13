import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerresponseComponent } from './answerresponse.component';

describe('AnswerresponseComponent', () => {
  let component: AnswerresponseComponent;
  let fixture: ComponentFixture<AnswerresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
