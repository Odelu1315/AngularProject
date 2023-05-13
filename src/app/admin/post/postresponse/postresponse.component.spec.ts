import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostresponseComponent } from './postresponse.component';

describe('PostresponseComponent', () => {
  let component: PostresponseComponent;
  let fixture: ComponentFixture<PostresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostresponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
