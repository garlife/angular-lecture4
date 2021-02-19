import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.component.html',
  styleUrls: ['./temp2.component.css']
})
export class Temp2Component implements OnInit {

  @ContentChild('headerContent', {static:true})
  header: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  change(): void {
    console.log(this.header);
  }

}
