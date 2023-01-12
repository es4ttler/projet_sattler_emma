import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantFruitListComponent } from './composant-fruit-list.component';

describe('ComposantFruitListComponent', () => {
  let component: ComposantFruitListComponent;
  let fixture: ComponentFixture<ComposantFruitListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantFruitListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantFruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
