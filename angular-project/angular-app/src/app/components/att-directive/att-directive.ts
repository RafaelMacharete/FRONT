import { DatePipe, JsonPipe, NgClass, NgStyle, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [
    NgClass, NgStyle, 
    UpperCasePipe, TitleCasePipe,
    SlicePipe, JsonPipe, DatePipe
  ],
    templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  div1ClassName = signal<string>('');
  isDiv2Green: boolean = false;

  firstName: string = 'Rafael';
  courseName: string = 'Angular 20 tutorial';

  rollNoList: number[] = [1,2,3,4,5,6,7,8,9,10]

  studentObj: any = {
    name: 'Rafael',
    city: 'Sumare',
  }
  
  currentDate: Date = new Date();

  constructor() { 
    console.log('constructor');
  }


  
  ngOnInit(): void {
    console.log('ngOnInit');
    // to trigger api calls
    // to subscribe
    
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    // to deal with viewChild
    // subscribe
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // unsubscribe
    // restrict user from navigation
  }

  setBgClass(className: string){
    this.div1ClassName.set(className);
  }

  toggleDiv2Color(){
    this.isDiv2Green = !this.isDiv2Green;
  }
}
