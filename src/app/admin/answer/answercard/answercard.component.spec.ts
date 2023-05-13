import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswercardComponent } from './answercard.component';

describe('AnswercardComponent', () => {
  let component: AnswercardComponent;
  let fixture: ComponentFixture<AnswercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
