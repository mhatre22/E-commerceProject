import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableComponent } from './vegetable.component';

describe('VegetableComponent', () => {
  let component: VegetableComponent;
  let fixture: ComponentFixture<VegetableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegetableComponent]
    });
    fixture = TestBed.createComponent(VegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
