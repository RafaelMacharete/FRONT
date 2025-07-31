import { Component, computed, EventEmitter, Input, input, model, Output, output } from '@angular/core';

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

  awesomeName: string = '';

  increment(){
    this.modelEntraceBar.update(oldValue => oldValue + 10);
  }  

  
  count = model<number>(0);
  updateCount(amount: number): void{
    this.count.update(currentCount => currentCount + amount);
  }

  // input (standalone === true)
  value2 = input(0, {alias: 'aliasValue'});

  // Input (decorator)
  @Input()
  inputDecorator: string = '';

  // Output (decorator)

  @Output()
  clicked = new EventEmitter<void>();

  onClick(){
    this.clicked.emit();
    console.log(`Decorator:` , this.clicked);
  }

  // output function
  outputFunction = output<number>();
  onClickFunction(){
    console.log('output function');
    
    this.outputFunction.emit(7);
    console.log(this.outputFunction);
  }

}

function appendPx(value: number): string {
  return `${value}px`;
}