import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosPincipalComponent } from './empleados-pincipal.component';

describe('EmpleadosPincipalComponent', () => {
  let component: EmpleadosPincipalComponent;
  let fixture: ComponentFixture<EmpleadosPincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleadosPincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadosPincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
