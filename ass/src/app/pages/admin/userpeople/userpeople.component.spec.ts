import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPeople } from './userpeople.component';

describe('UserPeople', () => {
  let component: UserPeople;
  let fixture: ComponentFixture<UserPeople>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPeople]
    });
    fixture = TestBed.createComponent(UserPeople);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
