import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcompComponent } from './regcomp.component';

describe('RegcompComponent', () => {
  let component: RegcompComponent;
  let fixture: ComponentFixture<RegcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegcompComponent]
    });
    fixture = TestBed.createComponent(RegcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
