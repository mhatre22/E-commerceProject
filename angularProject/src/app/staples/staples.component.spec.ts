import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaplesComponent } from './staples.component';

describe('StaplesComponent', () => {
  let component: StaplesComponent;
  let fixture: ComponentFixture<StaplesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaplesComponent]
    });
    fixture = TestBed.createComponent(StaplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
