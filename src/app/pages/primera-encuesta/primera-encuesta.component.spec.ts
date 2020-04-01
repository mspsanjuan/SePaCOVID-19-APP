import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraEncuestaComponent } from './primera-encuesta.component';

describe('PrimeraEncuestaComponent', () => {
  let component: PrimeraEncuestaComponent;
  let fixture: ComponentFixture<PrimeraEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeraEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeraEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
