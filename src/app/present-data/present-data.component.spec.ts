import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentDataComponent } from './present-data.component';

describe('PresentDataComponent', () => {
  let component: PresentDataComponent;
  let fixture: ComponentFixture<PresentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
