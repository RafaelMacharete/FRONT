import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = 'Angular 20 Tutorial';
  productPrice: number = 320;

  maxLength: number = 3
  minChar: number = 1;
  inputType: string = 'radio'

  myClassName: string = 'myColor'

  constructor() {
  }

  showWelcomeMessage() {
    alert("Welcome!")
  }

  changeCourseName() {
    this.courseName = 'Certainly, this is not a Angular code!'
  }

  onOptionChange(){
    alert('Option changed')
  }
}
