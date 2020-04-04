import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerEncuestaComponent } from './primer-encuesta.component';

describe('PrimerEncuestaComponent', () => {
  let component: PrimerEncuestaComponent;
  let fixture: ComponentFixture<PrimerEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimerEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
