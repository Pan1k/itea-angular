import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SspGameComponent } from './ssp-game.component';

describe('SspGameComponent', () => {
  let component: SspGameComponent;
  let fixture: ComponentFixture<SspGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SspGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SspGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
