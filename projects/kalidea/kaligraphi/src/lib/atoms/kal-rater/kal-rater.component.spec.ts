import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalRaterComponent } from './kal-rater.component';
import { By } from '@angular/platform-browser';
import { KalIconComponent, KalIconModule } from 'projects/kalidea/kaligraphi/src/lib/atoms/kal-icon/kal-icon.module';
import { FormControlAccessComponent } from 'projects/kalidea/kaligraphi/src/lib/utils';

describe('KalRaterComponent', () => {
  let component: KalRaterComponent;
  let fixture: ComponentFixture<KalRaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        KalIconModule,
      ],
      declarations: [
        KalRaterComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalRaterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a custom icon', () => {
    component.icon = 'face';

    // update component view
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.directive(KalIconComponent));

    expect(iconElement.nativeElement.textContent.trim()).toBe('face');
  });

  it('should display a number of icons equals to the max rating value', () => {
    component.maxRate = 10;

    // default value : expect to have 5 elements
    fixture.detectChanges();

    const iconElements = fixture.debugElement.queryAll(By.directive(KalIconComponent));
    expect(iconElements.length).toEqual(component.maxRate);
  });

  it('should have a default rate', () => {
    spyOn(FormControlAccessComponent.prototype, 'writeValue');
    // set default value
    component.writeValue(4);

    // update view
    fixture.detectChanges();

    expect(FormControlAccessComponent.prototype.writeValue).toHaveBeenCalledWith(4);

    // we should have 4 icons on 5 with class 'active'
    expect(fixture.debugElement.queryAll(By.css('.active')).length).toBe(4);
  });

  it('should emit the new rate value', () => {
    spyOn(component, 'rate').and.callThrough();
    spyOn(FormControlAccessComponent.prototype, 'notifyUpdate');

    // update view
    fixture.detectChanges();

    const secondIcon = fixture.debugElement.queryAll(By.directive(KalIconComponent))[1];
    secondIcon.nativeElement.click();

    expect(component.rate).toHaveBeenCalledWith(1); // 1 = array index
    expect(FormControlAccessComponent.prototype.notifyUpdate).toHaveBeenCalledWith(2);
  });
});