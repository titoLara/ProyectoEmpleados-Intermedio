import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEmpleadosComponent } from './post-empleados.component';

describe('PostEmpleadosComponent', () => {
  let component: PostEmpleadosComponent;
  let fixture: ComponentFixture<PostEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostEmpleadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
