import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentAdmin } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentAdmin;
  let fixture: ComponentFixture<IndexComponentAdmin>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponentAdmin]
    });
    fixture = TestBed.createComponent(IndexComponentAdmin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
