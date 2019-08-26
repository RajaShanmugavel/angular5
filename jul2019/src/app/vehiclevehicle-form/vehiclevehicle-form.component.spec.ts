import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclevehicleFormComponent } from './vehiclevehicle-form.component';

describe('VehiclevehicleFormComponent', () => {
  let component: VehiclevehicleFormComponent;
  let fixture: ComponentFixture<VehiclevehicleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclevehicleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclevehicleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
