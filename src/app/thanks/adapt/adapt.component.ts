import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-adapt',
  templateUrl: './adapt.component.html',
  styleUrls: ['./adapt.component.css']
})
export class AdaptComponent {

  constructor(private service:SharedService) { }

  GetThanksList:any=[];

  ngOnInit(): void{
    this.refreshThanksList();
  }

  refreshThanksList() {
    this.service.getThanksList().subscribe(data => {
      this.GetThanksList = data.filter(item => {
          return item.tipo.toLowerCase().includes('adapt');
      });
    });
  }

}
