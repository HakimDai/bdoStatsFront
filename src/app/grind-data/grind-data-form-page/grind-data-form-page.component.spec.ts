import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindDataFormPageComponent } from './grind-data-form-page.component';

describe('GrindDataFormPageComponent', () => {
  let component: GrindDataFormPageComponent;
  let fixture: ComponentFixture<GrindDataFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrindDataFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindDataFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
