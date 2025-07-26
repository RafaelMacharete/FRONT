import { Component, signal } from '@angular/core';
import { Bar } from "../bar/bar";

@Component({
  selector: 'app-foo',
  imports: [Bar],
  templateUrl: './foo.html',
  styleUrl: './foo.css'
})
export class Foo {
  volume = signal(56)
  initialCount = 44;
}
