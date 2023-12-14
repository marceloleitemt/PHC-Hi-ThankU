import { Component } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})

export class ThanksComponent {

  constructor(private service:SharedService){}

  thankus:any=[];

  refreshThankus(){
    this.service.getThanks().subscribe((res)=>{
      this.thankus=res;
    })
  }

  ngOnInit(){
    this.refreshThankus();
  }

}
