import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  template: `LifecycleComponent works!`,
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges {
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
