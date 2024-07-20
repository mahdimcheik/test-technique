import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityLegendComponent } from './city-legend.component';

describe('CityLegendComponent', () => {
  let component: CityLegendComponent;
  let fixture: ComponentFixture<CityLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CityLegendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
