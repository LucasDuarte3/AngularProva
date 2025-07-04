import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCreateComponent } from './usuario-create';

describe('UsuarioCreate', () => {
  let component: UsuarioCreateComponent;
  let fixture: ComponentFixture<UsuarioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
