import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraCargaDatosComponent } from './primera-carga-datos.component';

describe('PrimeraCargaDatosComponent', () => {
  let component: PrimeraCargaDatosComponent;
  let fixture: ComponentFixture<PrimeraCargaDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeraCargaDatosComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraCargaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
