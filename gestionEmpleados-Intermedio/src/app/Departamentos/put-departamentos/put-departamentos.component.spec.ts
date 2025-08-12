import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDepartamentosComponent } from './put-departamentos.component';

describe('PutDepartamentosComponent', () => {
  let component: PutDepartamentosComponent;
  let fixture: ComponentFixture<PutDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutDepartamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
