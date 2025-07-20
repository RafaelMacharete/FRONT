import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  isParaVisible: boolean = true;

  startMonthName: string = 'feb';

  citList: string[] = ["Cit1", 'Cit2', 'Cit3', 'Cit4']

  studentList: any[] = [
    {name: 'AAA', city: 'City1', isActive: false},
    {name: 'BBB', city: 'City2', isActive: true},
    {name: 'CCC', city: 'City3', isActive: false},
    {name: 'DDD', city: 'City4', isActive: true},
    {name: 'EEE', city: 'City5', isActive: false},
  ]
  
  showP(){
    this.isParaVisible = true;
  }

  hideP(){
    this.isParaVisible = false;
  }
}
