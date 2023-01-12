import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantLoginComponent } from './composant-login.component';

describe('ComposantLoginComponent', () => {
  let component: ComposantLoginComponent;
  let fixture: ComponentFixture<ComposantLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
