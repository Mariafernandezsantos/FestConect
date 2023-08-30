import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistVideosFestComponent } from './playlist-videos-fest.component';

describe('PlaylistVideosFestComponent', () => {
  let component: PlaylistVideosFestComponent;
  let fixture: ComponentFixture<PlaylistVideosFestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistVideosFestComponent]
    });
    fixture = TestBed.createComponent(PlaylistVideosFestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
