import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlStoreMappingComponent } from './control-store-mapping.component';

describe('ControlStoreMappingComponent', () => {
  let component: ControlStoreMappingComponent;
  let fixture: ComponentFixture<ControlStoreMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlStoreMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlStoreMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
