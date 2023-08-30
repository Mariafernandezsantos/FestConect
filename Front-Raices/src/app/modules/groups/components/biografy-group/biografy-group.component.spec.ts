import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografyGroupComponent } from './biografy-group.component';

describe('BiografyGroupComponent', () => {
  let component: BiografyGroupComponent;
  let fixture: ComponentFixture<BiografyGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiografyGroupComponent]
    });
    fixture = TestBed.createComponent(BiografyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
