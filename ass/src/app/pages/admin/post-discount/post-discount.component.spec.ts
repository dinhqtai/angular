import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDiscountComponent } from './post-discount.component';

describe('PostDiscountComponent', () => {
  let component: PostDiscountComponent;
  let fixture: ComponentFixture<PostDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDiscountComponent]
    });
    fixture = TestBed.createComponent(PostDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
