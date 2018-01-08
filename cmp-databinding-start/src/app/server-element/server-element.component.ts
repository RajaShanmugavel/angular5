import {
  Component, OnInit, Input, ViewEncapsulation, SimpleChanges,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // 'None' - Overrides style, also 'Native' (this does the shadow DOM). Default is 'Emulated'
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string }; // The argument 'srvElement' inside @Input is the alias. If not used, will be accessed using 'element'
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log("Constructor of ServerElementComponent called!");
  }

  ngOnInit() {
    console.log("ngOnInit of ServerElementComponent called!");
    console.log('Text Content:'+this.header.nativeElement.textContent); 
    console.log('Text Content of Paragraph:'+this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges of ServerElementComponent called!");
    console.log("Changes:" + changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck of ServerElementComponent called!");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit of ServerElementComponent called!");
    console.log('Text Content of Paragraph:'+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked of ServerElementComponent called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit of ServerElementComponent called!");
    console.log('Text Content:'+this.header.nativeElement.textContent); 
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked of ServerElementComponent called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy of ServerElementComponent called!");
  }

}
