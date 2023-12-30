import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-adapt',
  templateUrl: './adapt.component.html',
  styleUrls: ['./adapt.component.css']
})
export class AdaptComponent {
  constructor(private service:SharedService){}

  thankus:any=[];

  getThanksTipo(tipo: string) {
    this.service.getThanksTipo(tipo).subscribe((res) => {
      this.thankus = res;
    });
  }

  ngOnInit(){
    this.getThanksTipo('Adapt & Grow');
  }

}
