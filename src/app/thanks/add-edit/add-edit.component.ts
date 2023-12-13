import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit{

  constructor(private service:SharedService) { }
  @Input()
    tks:any;
    ThankyouId:string | undefined;
    ThankYouMessage:string | undefined;

  ngOnInit(): void {
    this.ThankyouId=this.tks.ThankyouId;
    this.ThankYouMessage=this.tks.ThankYouMessage;
  }

  addThankYou(){
    var val = {ThankYouMessage:this.ThankYouMessage};
    this.service.addThankYou(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateThankYou(){
    var val = {ThankyouId:this.ThankyouId,
      ThankYouMessage:this.ThankYouMessage};
    this.service.updateThankYou(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  // addClick(){
  //   this.tks={
  //     ThankyouId:0,
  //     ThankYouMessage:""
  //   }
  //   console.log(this.tks)
  // }

}
