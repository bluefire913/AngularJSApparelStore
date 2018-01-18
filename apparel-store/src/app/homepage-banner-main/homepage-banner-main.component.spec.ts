import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBannerMainComponent } from './homepage-banner-main.component';

describe('HomepageBannerMainComponent', () => {
  let component: HomepageBannerMainComponent;
  let fixture: ComponentFixture<HomepageBannerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageBannerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageBannerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
