import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost/Portal/programs/gensel.aspx?cscript=";

  constructor(private http:HttpClient) { }

  getThanksList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'ApiThankU');
  }

  addThankYou(val:any){
    return this.http.post(this.APIUrl+'/Addthankyou', val);
  }

  updateThankYou(val:any){
    return this.http.put(this.APIUrl+'/Updthankyou', val);
  }

  deleteThankYou(val:any){
    return this.http.delete(this.APIUrl+'/Delthankyou'+val);
  }

}
