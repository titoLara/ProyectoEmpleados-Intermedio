import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDepartamentosComponent } from './post-departamentos.component';

describe('PostDepartamentosComponent', () => {
  let component: PostDepartamentosComponent;
  let fixture: ComponentFixture<PostDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDepartamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
