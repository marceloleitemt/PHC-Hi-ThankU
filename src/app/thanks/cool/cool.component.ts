import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cool',
  templateUrl: './cool.component.html',
  styleUrls: ['./cool.component.css']
})
export class CoolComponent {
  constructor(private service:SharedService) { }

  GetThanksList:any=[];

  ngOnInit(): void{
    this.refreshThanksList();
  }

  refreshThanksList() {
    this.service.getThanksList().subscribe(data => {
      this.GetThanksList = data.filter(item => {
          return item.tipo.toLowerCase().includes('cool');
      });
    });
  }

}
