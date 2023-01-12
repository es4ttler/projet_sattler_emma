import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantHeaderComponent } from './composant-header.component';

describe('ComposantHeaderComponent', () => {
  let component: ComposantHeaderComponent;
  let fixture: ComponentFixture<ComposantHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
