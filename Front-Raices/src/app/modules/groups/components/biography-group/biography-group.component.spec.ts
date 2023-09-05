import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographyGroupComponent } from './biography-group.component';

describe('BiographyGroupComponent', () => {
  let component: BiographyGroupComponent;
  let fixture: ComponentFixture<BiographyGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiographyGroupComponent]
    });
    fixture = TestBed.createComponent(BiographyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
