import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarControlComponent } from './snackbar-control.component';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';


describe('SnackbarControlComponent', () => {
  let component: SnackbarControlComponent;
  let fixture: ComponentFixture<SnackbarControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarControlComponent],
      providers : [{ provide: MAT_SNACK_BAR_DATA, useValue: MAT_SNACK_BAR_DATA },
        { provide: MatSnackBar, useValue: MatSnackBar }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
