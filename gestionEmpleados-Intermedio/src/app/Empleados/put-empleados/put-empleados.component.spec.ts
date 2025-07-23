import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutEmpleadosComponent } from './put-empleados.component';

describe('PutEmpleadosComponent', () => {
  let component: PutEmpleadosComponent;
  let fixture: ComponentFixture<PutEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
