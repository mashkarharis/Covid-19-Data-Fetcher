import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  constructor(private elementRef: ElementRef){}
  title = 'covid19datafetcher';
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.background = '#f0f5f1';
  }
}
 
