import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantErrorRoutingComponent } from './composant-error-routing.component';

describe('ComposantErrorRoutingComponent', () => {
  let component: ComposantErrorRoutingComponent;
  let fixture: ComponentFixture<ComposantErrorRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantErrorRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantErrorRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
