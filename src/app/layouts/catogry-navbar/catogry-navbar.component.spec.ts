import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogryNavbarComponent } from './catogry-navbar.component';

describe('CatogryNavbarComponent', () => {
  let component: CatogryNavbarComponent;
  let fixture: ComponentFixture<CatogryNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatogryNavbarComponent]
    });
    fixture = TestBed.createComponent(CatogryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
