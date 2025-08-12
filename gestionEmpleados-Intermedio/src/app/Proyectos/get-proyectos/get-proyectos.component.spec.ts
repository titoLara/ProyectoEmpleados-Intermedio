import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProyectosComponent } from './get-proyectos.component';

describe('GetProyectosComponent', () => {
  let component: GetProyectosComponent;
  let fixture: ComponentFixture<GetProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
