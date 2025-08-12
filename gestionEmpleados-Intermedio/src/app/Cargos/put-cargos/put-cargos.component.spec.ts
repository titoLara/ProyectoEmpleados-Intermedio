import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCargosComponent } from './put-cargos.component';

describe('PutCargosComponent', () => {
  let component: PutCargosComponent;
  let fixture: ComponentFixture<PutCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutCargosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
