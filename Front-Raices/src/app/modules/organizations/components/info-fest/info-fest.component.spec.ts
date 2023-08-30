import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFestComponent } from './info-fest.component';

describe('InfoFestComponent', () => {
  let component: InfoFestComponent;
  let fixture: ComponentFixture<InfoFestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoFestComponent]
    });
    fixture = TestBed.createComponent(InfoFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
