import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalshirtComponent } from './formalshirt.component';

describe('FormalshirtComponent', () => {
  let component: FormalshirtComponent;
  let fixture: ComponentFixture<FormalshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalshirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
