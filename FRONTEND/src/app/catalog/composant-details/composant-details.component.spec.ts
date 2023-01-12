import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantDetailsComponent } from './composant-details.component';

describe('ComposantDetailsComponent', () => {
  let component: ComposantDetailsComponent;
  let fixture: ComponentFixture<ComposantDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
