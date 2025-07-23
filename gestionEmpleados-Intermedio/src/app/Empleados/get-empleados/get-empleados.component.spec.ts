import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmpleadosComponent } from './get-empleados.component';

describe('GetEmpleadosComponent', () => {
  let component: GetEmpleadosComponent;
  let fixture: ComponentFixture<GetEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
