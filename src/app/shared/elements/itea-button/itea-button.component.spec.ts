import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IteaButtonComponent } from './itea-button.component';

describe('IteaButtonComponent', () => {
  let component: IteaButtonComponent;
  let fixture: ComponentFixture<IteaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IteaButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IteaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
