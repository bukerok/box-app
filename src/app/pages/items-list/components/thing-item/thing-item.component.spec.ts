import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingItemComponent } from './thing-item.component';

describe('ThingItemComponent', () => {
  let component: ThingItemComponent;
  let fixture: ComponentFixture<ThingItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThingItemComponent]
    });
    fixture = TestBed.createComponent(ThingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
