import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantSearchbarComponent } from './composant-searchbar.component';

describe('ComposantSearchbarComponent', () => {
  let component: ComposantSearchbarComponent;
  let fixture: ComponentFixture<ComposantSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantSearchbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
