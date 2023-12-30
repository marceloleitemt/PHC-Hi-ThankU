import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptComponent } from './adapt.component';

describe('AdaptComponent', () => {
  let component: AdaptComponent;
  let fixture: ComponentFixture<AdaptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdaptComponent]
    });
    fixture = TestBed.createComponent(AdaptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
