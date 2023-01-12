import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMeasurementResultsComponent } from './test-measurement-results.component';

describe('TestMeasurementResultsComponent', () => {
  let component: TestMeasurementResultsComponent;
  let fixture: ComponentFixture<TestMeasurementResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMeasurementResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMeasurementResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
