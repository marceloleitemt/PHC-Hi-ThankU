import { Component } from '@angular/core';
import {SharedService} from 'src/app/services/shared.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})

export class ThanksComponent {
  constructor(private service:SharedService){}

  thankus:any=[];

  getThanksTipo(tipo: string) {
    this.service.getThanksTipo(tipo).subscribe((res) => {
      this.thankus = res;
    });
  }

  ngOnInit(){
    this.getThanksTipo('Thank You');
  }

}
