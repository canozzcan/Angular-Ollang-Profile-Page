import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionOfferComponent } from './promotion-offer.component';

describe('PromotionOfferComponent', () => {
  let component: PromotionOfferComponent;
  let fixture: ComponentFixture<PromotionOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
