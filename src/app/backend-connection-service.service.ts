import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionServiceService {

  constructor(private http: HttpClient) { }


  // sendData() {
  //   this.http.post('http://127.0.0.1:5000', data).subscribe(response => {
  //     console.log("New data is sent to back end.");
  //   })
  // }



}

