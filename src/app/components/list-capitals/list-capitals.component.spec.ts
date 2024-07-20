import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapitalsComponent } from './list-capitals.component';

describe('ListCapitalsComponent', () => {
  let component: ListCapitalsComponent;
  let fixture: ComponentFixture<ListCapitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCapitalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCapitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
