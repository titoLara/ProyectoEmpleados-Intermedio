import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoPrincipalComponent } from './proyecto-principal.component';

describe('ProyectoPrincipalComponent', () => {
  let component: ProyectoPrincipalComponent;
  let fixture: ComponentFixture<ProyectoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
