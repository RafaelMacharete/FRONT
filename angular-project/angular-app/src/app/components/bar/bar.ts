import { Component, computed, input, model } from '@angular/core';

@Component({
  selector: 'app-bar',
  imports: [],
  templateUrl: './bar.html',
  styleUrl: './bar.css'
})
export class Bar {
  value = input(0);
  requiredValue = input.required<string>();
  inputTransform = input('', { transform: appendPx }); // input, implicity understand as undefined
  label = computed(() => `The inputTransform is ${this.inputTransform()}`);

  modelEntraceBar = model(0);

  increment(){
    this.modelEntraceBar.update(oldValue => oldValue + 10);
  }  

  
  count = model<number>(0);
  updateCount(amount: number): void{
    this.count.update(currentCount => currentCount + amount);
  }

  value2 = input(0, {alias: 'aliasValue'});
}

function appendPx(value: number): string {
  return `${value}px`;
}