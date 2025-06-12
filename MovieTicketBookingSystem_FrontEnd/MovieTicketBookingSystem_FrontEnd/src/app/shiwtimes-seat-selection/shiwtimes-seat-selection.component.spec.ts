import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiwtimesSeatSelectionComponent } from './shiwtimes-seat-selection.component';

describe('ShiwtimesSeatSelectionComponent', () => {
  let component: ShiwtimesSeatSelectionComponent;
  let fixture: ComponentFixture<ShiwtimesSeatSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiwtimesSeatSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiwtimesSeatSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
