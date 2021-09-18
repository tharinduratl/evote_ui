import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterLoginComponent } from './voter-login.component';

describe('VoterLoginComponent', () => {
  let component: VoterLoginComponent;
  let fixture: ComponentFixture<VoterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
