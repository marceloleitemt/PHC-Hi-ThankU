import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:57752/api";

  constructor(private http:HttpClient) { }

  getThanksList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/thankyou');
  }

  addThankYou(val:any){
    return this.http.post(this.APIUrl+'/thankyou', val);
  }

  updateThankYou(val:any){
    return this.http.put(this.APIUrl+'/thankyou', val);
  }

  deleteThankYou(val:any){
    return this.http.delete(this.APIUrl+'/thankyou'+val);
  }

}
