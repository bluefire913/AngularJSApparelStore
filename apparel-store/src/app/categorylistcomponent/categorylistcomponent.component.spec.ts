import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistcomponentComponent } from './categorylistcomponent.component';

describe('CategorylistcomponentComponent', () => {
  let component: CategorylistcomponentComponent;
  let fixture: ComponentFixture<CategorylistcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorylistcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorylistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
