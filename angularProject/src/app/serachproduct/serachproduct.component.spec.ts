import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachproductComponent } from './serachproduct.component';

describe('SerachproductComponent', () => {
  let component: SerachproductComponent;
  let fixture: ComponentFixture<SerachproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerachproductComponent]
    });
    fixture = TestBed.createComponent(SerachproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
