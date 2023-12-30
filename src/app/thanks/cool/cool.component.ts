import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cool',
  templateUrl: './cool.component.html',
  styleUrls: ['./cool.component.css']
})
export class CoolComponent {
  constructor(private service:SharedService){}

  thankus:any=[];

  getThanksTipo(tipo: string) {
    this.service.getThanksTipo(tipo).subscribe((res) => {
      this.thankus = res;
    });
  }

  ngOnInit(){
    this.getThanksTipo('Cool But Pro');
  }

}
