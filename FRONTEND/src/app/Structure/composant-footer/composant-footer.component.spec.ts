import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantFooterComponent } from './composant-footer.component';

describe('ComposantFooterComponent', () => {
  let component: ComposantFooterComponent;
  let fixture: ComponentFixture<ComposantFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
