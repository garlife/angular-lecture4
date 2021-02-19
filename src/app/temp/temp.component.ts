import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Temp1Component } from './temp1/temp1.component';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements  AfterViewInit{

  @ViewChild('counter', {static:false})

  counter: Temp1Component | undefined;
  
  name: string = 'текст';
  header: string = 'Заголовок';

  constructor() { 
    console.log('app-temp', this.counter);
  }

  ngAfterViewInit(): void {
    console.log('app-temp', this.counter);
    (this.counter as Temp1Component).counter = 100;
  }

}
