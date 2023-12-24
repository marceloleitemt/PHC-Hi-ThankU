import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service:SharedService){}

  thankus:any=[];

  refreshThanks(){
    this.service.getThanks().subscribe((res)=>{
      this.thankus=res;
    })
  }

  ngOnInit(){
    this.refreshThanks();
  }


}
