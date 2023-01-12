import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactSummaryComponent } from './impact-summary.component';

describe('ImpactSummaryComponent', () => {
  let component: ImpactSummaryComponent;
  let fixture: ComponentFixture<ImpactSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpactSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
