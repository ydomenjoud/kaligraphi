import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalTextareaComponent } from './kal-textarea.component';

describe('KalTextareaComponent', () => {
  let component: KalTextareaComponent;
  let fixture: ComponentFixture<KalTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
