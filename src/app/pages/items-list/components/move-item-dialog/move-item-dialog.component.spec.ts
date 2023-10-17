import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveItemDialogComponent } from './move-item-dialog.component';

describe('MoveItemDialogComponent', () => {
  let component: MoveItemDialogComponent;
  let fixture: ComponentFixture<MoveItemDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MoveItemDialogComponent]
    });
    fixture = TestBed.createComponent(MoveItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
