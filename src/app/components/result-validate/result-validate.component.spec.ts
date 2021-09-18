import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultValidateComponent } from './result-validate.component';

describe('ResultValidateComponent', () => {
  let component: ResultValidateComponent;
  let fixture: ComponentFixture<ResultValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
