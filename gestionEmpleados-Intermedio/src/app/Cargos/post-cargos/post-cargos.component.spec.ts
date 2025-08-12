import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCargosComponent } from './post-cargos.component';

describe('PostCargosComponent', () => {
  let component: PostCargosComponent;
  let fixture: ComponentFixture<PostCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCargosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
