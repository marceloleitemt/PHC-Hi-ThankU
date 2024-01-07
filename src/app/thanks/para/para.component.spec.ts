import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaComponent } from './para.component';

describe('ParaComponent', () => {
  let component: ParaComponent;
  let fixture: ComponentFixture<ParaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParaComponent]
    });
    fixture = TestBed.createComponent(ParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
