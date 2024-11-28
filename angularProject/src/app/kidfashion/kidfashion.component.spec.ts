import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidfashionComponent } from './kidfashion.component';

describe('KidfashionComponent', () => {
  let component: KidfashionComponent;
  let fixture: ComponentFixture<KidfashionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidfashionComponent]
    });
    fixture = TestBed.createComponent(KidfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
