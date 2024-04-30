import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalUpdateComponent } from './signal-update.component';

describe('SignalUpdateComponent', () => {
  let component: SignalUpdateComponent;
  let fixture: ComponentFixture<SignalUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
