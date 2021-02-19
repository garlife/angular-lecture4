import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.component.html',
  styleUrls: ['./temp1.component.css']
})
export class Temp1Component implements OnInit {

  counter: number  = 100;
  constructor() { }

  ngOnInit(): void {
  }

  increment(n : number): void {
    this.counter=this.counter ? this.counter + n : 0;
  }

  decrement(n : number): void {
    this.counter-=n;
  }

}
