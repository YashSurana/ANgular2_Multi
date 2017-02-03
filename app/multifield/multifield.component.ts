import { Component, ElementRef, Renderer, ViewChild, OnInit }  from 'angular2/core';
import { MultiContent } from './miltifieldContent.component';

@Component({
  selector: "multifield",	
  template : `
    <div class="template" #templateWrapper>
		<ng-content></ng-content>
	</div>
	<div class="multi-wrapper" #multiWrapper>
		<ul class="heroes">
		  <li *ngFor="#multiItem of contentList; #i = index">
				<div class="item" [innerHTML]="multiItem.html"></div>
			<button class="delete-button" (click)="deleteContent(multiItem, $event,i)">Delete</button>
		  </li>
		</ul>
	</div>
	<button type="button" class="btn" (click)="addClick()">Add</button>
  `
})
export class MultiField {

  private contentList: MultiContent[] = [];

  @ViewChild('templateWrapper') innertemplate: ElementRef;
  
  @ViewChild('multiWrapper') multiWrapper: ElementRef;
  
  private statisTemplate: String;

  constructor(private element: ElementRef, private renderer: Renderer){
	console.log(element.nativeElement);
  }
  
  addClick() {
	this.contentList.push({
		index: 1, 
		html: this.statisTemplate
	});
  }
  
  ngAfterViewInit() {
    this.statisTemplate = this.innertemplate.nativeElement.innerHTML;
	//this.innertemplate.nativeElement.innerHTML = "";
  }
  
  deleteContent(item: MultiContent, event: any,i): void {
	console.log(i);
	this.contentList.splice(i, 1);
  }
  
}