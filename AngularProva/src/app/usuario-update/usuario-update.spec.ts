import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioUpdateComponent } from './usuario-update';

describe('UsuarioUpdate', () => {
  let component: UsuarioUpdateComponent;
  let fixture: ComponentFixture<UsuarioUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
