import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantRecapComponent } from './composant-recap.component';

describe('ComposantRecapComponent', () => {
  let component: ComposantRecapComponent;
  let fixture: ComponentFixture<ComposantRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantRecapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
