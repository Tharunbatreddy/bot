import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTimesListComponent } from './show-times-list.component';

describe('ShowTimesListComponent', () => {
  let component: ShowTimesListComponent;
  let fixture: ComponentFixture<ShowTimesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTimesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTimesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
