import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocaionComponent } from './housing-locaion.component';

describe('HousingLocaionComponent', () => {
  let component: HousingLocaionComponent;
  let fixture: ComponentFixture<HousingLocaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocaionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
