import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmasterComponent } from './productmaster.component';

describe('ProductmasterComponent', () => {
  let component: ProductmasterComponent;
  let fixture: ComponentFixture<ProductmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
