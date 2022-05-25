import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrunkardComponent } from './drunkard.component';

describe('DrunkardComponent', () => {
  let component: DrunkardComponent;
  let fixture: ComponentFixture<DrunkardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrunkardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrunkardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
