import { Component, computed, signal, viewChild } from '@angular/core';
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
  
  // View queries
  bar = viewChild(Bar);
  barText = computed(() => this.bar()?.awesomeName)

  saveFooState(){
    console.log('Have you called me?!')
  }

  doesSomething(){
    console.log(123)
  }

  performSomething(eventData: number){
    console.log(321);
    console.log(eventData);

    // View queries
    console.log("View queries");
    console.log(this.bar());
    console.log(this.barText());

  }

  

}
