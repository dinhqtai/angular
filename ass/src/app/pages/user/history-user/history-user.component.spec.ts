import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryUserComponent } from './history-user.component';

describe('HistoryUserComponent', () => {
  let component: HistoryUserComponent;
  let fixture: ComponentFixture<HistoryUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryUserComponent]
    });
    fixture = TestBed.createComponent(HistoryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
