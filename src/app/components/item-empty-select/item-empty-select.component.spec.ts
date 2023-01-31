import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEmptySelectComponent } from './item-empty-select.component';

describe('ItemEmptySelectComponent', () => {
  let component: ItemEmptySelectComponent;
  let fixture: ComponentFixture<ItemEmptySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEmptySelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemEmptySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
