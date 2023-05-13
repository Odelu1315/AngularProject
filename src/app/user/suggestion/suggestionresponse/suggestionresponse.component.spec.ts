import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionresponseComponent } from './suggestionresponse.component';

describe('SuggestionresponseComponent', () => {
  let component: SuggestionresponseComponent;
  let fixture: ComponentFixture<SuggestionresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
