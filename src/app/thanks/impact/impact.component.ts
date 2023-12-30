import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css']
})
export class ImpactComponent {
  constructor(private service:SharedService){}

  thankus:any=[];

  getThanksTipo(tipo: string) {
    this.service.getThanksTipo(tipo).subscribe((res) => {
      this.thankus = res;
    });
  }

  ngOnInit(){
    this.getThanksTipo('Made an Impact');
  }


}
