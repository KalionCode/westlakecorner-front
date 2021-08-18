import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaShowcaseComponent } from './media-showcase.component';

describe('MediaShowcaseComponent', () => {
  let component: MediaShowcaseComponent;
  let fixture: ComponentFixture<MediaShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
