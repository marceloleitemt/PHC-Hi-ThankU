import { Component } from '@angular/core';
import {SharedService} from 'src/app/services/shared.service';
import { Firestore, getDocs, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-para',
  templateUrl: './para.component.html',
  styleUrls: ['./para.component.css']
})

export class ParaComponent {
  constructor(private service:SharedService, private fs:Firestore ){}

  parautil:string = "";
  thankus:any=[];

  paraUtils: string[] = [];

getUniqueParaUtils() {
  this.service.getThanksParaUtilAll().subscribe((res) => {
    this.paraUtils = [...new Set(res.map(item => item['PARAUTIL']))];
  });
}

  getThanksParaUtilAll() {
    this.service.getThanksParaUtilAll().subscribe((res) => {
      this.thankus = res;
    });
  }

  getThanksParaUtil(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;
    const sanitizedValue = inputValue.replace(/(\r\n|\n|\r)/gm, '');
    inputElement.value = sanitizedValue;
    this.service.getThanksParaUtil(sanitizedValue).subscribe((res) => {
      this.thankus = res;
    });
  }

  ngOnInit(){
    this.getThanksParaUtilAll();
    this.getUniqueParaUtils();
  }

}
