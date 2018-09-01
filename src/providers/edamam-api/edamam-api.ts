import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EdamamApiProvider {

  //private baseUrl = ''

  constructor(public http: HttpClient) {
    console.log('Data provider has been constructed');
  }

}
