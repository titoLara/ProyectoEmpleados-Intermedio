import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDepartamentosComponent } from './get-departamentos.component';

describe('GetDepartamentosComponent', () => {
  let component: GetDepartamentosComponent;
  let fixture: ComponentFixture<GetDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetDepartamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
