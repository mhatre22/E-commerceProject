import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersignupComponent } from './sellersignup.component';

describe('SellersignupComponent', () => {
  let component: SellersignupComponent;
  let fixture: ComponentFixture<SellersignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellersignupComponent]
    });
    fixture = TestBed.createComponent(SellersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
