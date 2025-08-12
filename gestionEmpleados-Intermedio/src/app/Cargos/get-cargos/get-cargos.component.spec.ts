import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCargosComponent } from './get-cargos.component';

describe('GetCargosComponent', () => {
  let component: GetCargosComponent;
  let fixture: ComponentFixture<GetCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCargosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
