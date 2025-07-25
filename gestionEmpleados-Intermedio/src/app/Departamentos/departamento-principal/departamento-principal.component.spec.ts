import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoPrincipalComponent } from './departamento-principal.component';

describe('DepartamentoPrincipalComponent', () => {
  let component: DepartamentoPrincipalComponent;
  let fixture: ComponentFixture<DepartamentoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartamentoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
