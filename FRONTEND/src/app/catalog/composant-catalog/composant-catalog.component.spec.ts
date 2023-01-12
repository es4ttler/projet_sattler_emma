import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantCatalogComponent } from './composant-catalog.component';

describe('ComposantCatalogComponent', () => {
  let component: ComposantCatalogComponent;
  let fixture: ComponentFixture<ComposantCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantCatalogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
