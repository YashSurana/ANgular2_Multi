import {Component}  from 'angular2/core';

@Component({
  selector: "login",	
  template: `
  <h2>login</h2>
  <div>
	<form novalidate #loginForm>
		Username {{username}}
		<label for="">username</label>
		<input type="text" [(ngModel)]="username">
		
		<label for="">Password</label>
		<input type="password" [(ngModel)]="password">
		
		<button type="button" (click)="onClick()">Login</button>
	</form>
	
   </div>
  `,
})
export class Login {

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