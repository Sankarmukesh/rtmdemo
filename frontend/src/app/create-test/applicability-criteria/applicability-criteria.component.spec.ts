import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicabilityCriteriaComponent } from './applicability-criteria.component';

describe('ApplicabilityCriteriaComponent', () => {
  let component: ApplicabilityCriteriaComponent;
  let fixture: ComponentFixture<ApplicabilityCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicabilityCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicabilityCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
