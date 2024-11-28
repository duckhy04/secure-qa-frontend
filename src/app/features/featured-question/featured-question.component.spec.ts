import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedQuestionComponent } from './featured-question.component';

describe('FeaturedQuestionComponent', () => {
  let component: FeaturedQuestionComponent;
  let fixture: ComponentFixture<FeaturedQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
