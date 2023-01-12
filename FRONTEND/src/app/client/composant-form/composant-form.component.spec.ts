import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantFormComponent } from './composant-form.component';

describe('ComposantFormComponent', () => {
  let component: ComposantFormComponent;
  let fixture: ComponentFixture<ComposantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
