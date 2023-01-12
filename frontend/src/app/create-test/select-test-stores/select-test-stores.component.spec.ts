import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTestStoresComponent } from './select-test-stores.component';

describe('SelectTestStoresComponent', () => {
  let component: SelectTestStoresComponent;
  let fixture: ComponentFixture<SelectTestStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTestStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTestStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
