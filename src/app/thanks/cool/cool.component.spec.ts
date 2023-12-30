import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolComponent } from './cool.component';

describe('CoolComponent', () => {
  let component: CoolComponent;
  let fixture: ComponentFixture<CoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoolComponent]
    });
    fixture = TestBed.createComponent(CoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
