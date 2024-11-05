import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyproductComponent } from './dairyproduct.component';

describe('DairyproductComponent', () => {
  let component: DairyproductComponent;
  let fixture: ComponentFixture<DairyproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DairyproductComponent]
    });
    fixture = TestBed.createComponent(DairyproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
