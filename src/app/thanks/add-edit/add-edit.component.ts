import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit{

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
