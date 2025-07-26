import { Component, input } from '@angular/core';

@Component({
  selector: 'app-bar',
  imports: [],
  templateUrl: './bar.html',
  styleUrl: './bar.css'
})
export class Bar {
  value = input(0);
  requiredValue = input.required<string>();
  inputTransform = input<string>('', { transform: appendPx }); // input, implicity understand as undefined

}

function appendPx(value: number): string {
  return `${value}px`;
}