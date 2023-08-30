import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrssGroupComponent } from './rrss-group.component';

describe('RrssGroupComponent', () => {
  let component: RrssGroupComponent;
  let fixture: ComponentFixture<RrssGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RrssGroupComponent]
    });
    fixture = TestBed.createComponent(RrssGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
