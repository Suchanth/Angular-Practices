import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsCounterComponent } from './signals-counter.component';

describe('SignalsCounterComponent', () => {
  let component: SignalsCounterComponent;
  let fixture: ComponentFixture<SignalsCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
