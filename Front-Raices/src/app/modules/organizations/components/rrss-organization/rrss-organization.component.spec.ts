import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RrssOrganizationComponent } from './rrss-organization.component';

describe('RrssOrganizationComponent', () => {
  let component: RrssOrganizationComponent;
  let fixture: ComponentFixture<RrssOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RrssOrganizationComponent]
    });
    fixture = TestBed.createComponent(RrssOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
