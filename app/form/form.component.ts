import {Component}  from 'angular2/core';
import { MultiField }  from '../multifield/multifield.component';

@Component({
  selector: "form",	
  directives:[MultiField],
  template: `
  <h2>Form</h2>
  <div>
	<form novalidate #loginForm>
		Username {{username}}
		<label for="">username</label>
		<input type="text" [(ngModel)]="username">
		
		<label for="">Password</label>
		<input type="password" [(ngModel)]="password">
		
		<multifield>
			<label for="">Title</label>
		    <input type="text">
		</multifield>
		
		<multifield>
		custom-mulltifield2
		</multifield>
		
		
		<button type="button" (click)="onClick()">Login</button>
	</form>
	
   </div>
  `,
})
export class FormComponent {

  username: String;
  password: String;  
	
  constructor(){}
  
  onClick: function() {
	console.log("printing");
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/