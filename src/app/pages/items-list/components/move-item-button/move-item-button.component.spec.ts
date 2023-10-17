import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveItemButtonComponent } from './move-item-button.component';

describe('MoveItemButtonComponent', () => {
  let component: MoveItemButtonComponent;
  let fixture: ComponentFixture<MoveItemButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MoveItemButtonComponent]
    });
    fixture = TestBed.createComponent(MoveItemButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
