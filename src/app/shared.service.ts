import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, deleteDoc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore){ }

  getThanks(){
    let thanksCollection = collection(this.fs,'ThankUs');
    return collectionData(thanksCollection,{idField:'id'});
  }

  addThanks(mensagem:string){
    let data = {mensagem:mensagem}
    let thanksCollection = collection(this.fs,'ThankUs');
    return addDoc(thanksCollection,data);
  }

  deleteThanks(id:string){
    let docRef = doc(this.fs,'ThankUs/'+id);
    return deleteDoc(docRef);
  }

}
