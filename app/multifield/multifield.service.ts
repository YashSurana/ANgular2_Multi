import { Injectable } from 'angular2/core';
import { MultiField } from './multifield.component';

@Injectable()
export class MultiFieldService {

  private 		
  
  confirm(message?:string) {
    return new Promise<boolean>((resolve, reject) =>
      resolve(window.confirm(message || 'Is it OK?')));
  };
}