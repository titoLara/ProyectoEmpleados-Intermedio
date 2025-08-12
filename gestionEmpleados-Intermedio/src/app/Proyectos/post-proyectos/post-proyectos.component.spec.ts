import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProyectosComponent } from './post-proyectos.component';

describe('PostProyectosComponent', () => {
  let component: PostProyectosComponent;
  let fixture: ComponentFixture<PostProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostProyectosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
