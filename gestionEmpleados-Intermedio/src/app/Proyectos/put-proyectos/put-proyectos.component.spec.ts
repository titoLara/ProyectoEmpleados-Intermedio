import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutProyectosComponent } from './put-proyectos.component';

describe('PutProyectosComponent', () => {
  let component: PutProyectosComponent;
  let fixture: ComponentFixture<PutProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
