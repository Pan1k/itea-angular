import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListFormComponent } from './books-list-form.component';

describe('BooksListFormComponent', () => {
  let component: BooksListFormComponent;
  let fixture: ComponentFixture<BooksListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
