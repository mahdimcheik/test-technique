import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddCityComponent } from './edit-add-city.component';

describe('EditAddCityComponent', () => {
  let component: EditAddCityComponent;
  let fixture: ComponentFixture<EditAddCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAddCityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAddCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
