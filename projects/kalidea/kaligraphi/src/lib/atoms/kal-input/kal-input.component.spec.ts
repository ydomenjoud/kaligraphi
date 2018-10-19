import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';

import { KalInputComponent } from './kal-input.component';

describe('InputComponent', () => {
  let component: KalInputComponent;
  let fixture: ComponentFixture<KalInputComponent>;
  let input: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        KalInputComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    input = fixture.debugElement.query(By.css('input'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contains an input element', () => {
    expect(input).toBeTruthy();
  });

  it('should display the form control value', () => {
    expect(input.nativeElement.value).toEqual('');

    component.writeValue('TEST');

    expect(component.control.value).toEqual('TEST');
    expect(input.nativeElement.value).toEqual('TEST');
  });

  it('should display a placeholder', () => {
    expect(input.nativeElement.placeholder).toEqual('');

    component.placeholder('TEST');

    expect(input.nativeElement.placeholder).toEqual('TEST');
  });

  it('should display a placeholder', () => {
    spyOn(component, 'notifyUpdate');
    expect(component.control.value).toEqual('');

    input.nativeElement.value = 'TEST';
    input.nativeElement.dispatchEvent(new Event('input'));

    expect(input.nativeElement.value).toEqual('TEST');
    expect(component.control.value).toEqual('TEST');

    expect(component.notifyUpdate).toHaveBeenCalledWith('TEST');
  });
});
