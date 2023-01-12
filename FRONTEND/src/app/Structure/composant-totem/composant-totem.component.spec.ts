import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantTotemComponent } from './composant-totem.component';

describe('ComposantTotemComponent', () => {
  let component: ComposantTotemComponent;
  let fixture: ComponentFixture<ComposantTotemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantTotemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantTotemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
