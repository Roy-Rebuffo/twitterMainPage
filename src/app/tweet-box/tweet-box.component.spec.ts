import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetBoxComponent } from './tweet-box.component';

describe('TweetBoxComponent', () => {
  let component: TweetBoxComponent;
  let fixture: ComponentFixture<TweetBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetBoxComponent]
    });
    fixture = TestBed.createComponent(TweetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
