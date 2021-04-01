import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualshirtComponent } from './casualshirt.component';

describe('CasualshirtComponent', () => {
  let component: CasualshirtComponent;
  let fixture: ComponentFixture<CasualshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasualshirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
