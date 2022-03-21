import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSortingComponent } from './test-sorting.component';

describe('TestSortingComponent', () => {
  let component: TestSortingComponent;
  let fixture: ComponentFixture<TestSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSortingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
