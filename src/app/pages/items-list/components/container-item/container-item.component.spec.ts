import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerItemComponent } from './container-item.component';

describe('ContainerItemComponent', () => {
  let component: ContainerItemComponent;
  let fixture: ComponentFixture<ContainerItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerItemComponent]
    });
    fixture = TestBed.createComponent(ContainerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
