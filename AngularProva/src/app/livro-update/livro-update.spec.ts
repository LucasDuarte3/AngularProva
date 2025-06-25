import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroUpdate } from './livro-update';

describe('LivroUpdate', () => {
  let component: LivroUpdate;
  let fixture: ComponentFixture<LivroUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
