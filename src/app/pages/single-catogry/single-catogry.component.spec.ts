import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatogryComponent } from './single-catogry.component';

describe('SingleCatogryComponent', () => {
  let component: SingleCatogryComponent;
  let fixture: ComponentFixture<SingleCatogryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCatogryComponent]
    });
    fixture = TestBed.createComponent(SingleCatogryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
