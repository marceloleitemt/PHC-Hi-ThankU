import { Component } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
