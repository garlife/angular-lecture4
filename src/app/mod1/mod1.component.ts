import { DatePipe, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
  providers: [DatePipe, SlicePipe]
})
export class Mod1Component implements OnInit {

  date = Date.now();
  money: number = 1000;
  pi: number = 3.1415926535;

  textHello: string = 'Hello, world!'

  constructor(private dataPipe:DatePipe, private slicePipe:SlicePipe) { 
    console.log(dataPipe.transform(this.date, 'MMMM'));
    console.log(slicePipe.transform(this.textHello, 2, 5));
  }

  ngOnInit(): void {
  }

  get dateNow(): string {
    return this.dataPipe.transform(this.date, 'HH:mm');
  }
  
  get getTextHello(): string {
    return this.slicePipe.transform(this.textHello, 2, 5)
  }
}
