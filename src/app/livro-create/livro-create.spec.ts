import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCreate } from './livro-create';

describe('LivroCreate', () => {
  let component: LivroCreate;
  let fixture: ComponentFixture<LivroCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
