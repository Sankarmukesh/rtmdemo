import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseTestImpactComponent } from './analyse-test-impact.component';

describe('AnalyseTestImpactComponent', () => {
  let component: AnalyseTestImpactComponent;
  let fixture: ComponentFixture<AnalyseTestImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseTestImpactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseTestImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
