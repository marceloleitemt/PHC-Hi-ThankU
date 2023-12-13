import { Component } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})

export class ThanksComponent {

  constructor(private service:SharedService) { }

  GetThanksList:any=[];

  ngOnInit(): void{
    this.refreshThanksList();
  }

  refreshThanksList(){
    this.service.getThanksList().subscribe(data=>{
      this.GetThanksList=data;
    })
  }

}
