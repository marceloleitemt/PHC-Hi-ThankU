import { Injectable } from '@angular/core';
import { Firestore, getFirestore, addDoc, collection, collectionData, doc, deleteDoc, query, orderBy, where } from '@angular/fire/firestore'
import { Thankus } from './thankus';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs:Firestore){ }

  //ler thankus
  getThanks(){
    let thanksCollection = collection(this.fs, 'ThankUs');
    let orderedQuery = query(thanksCollection, orderBy('DATAPOST', 'desc'));
    return collectionData(orderedQuery, { idField: 'id' });
  }

  //ler thankus filtrando
  getThanksTipo(tipo: string) {
    let thanksCollection = collection(this.fs, 'ThankUs');
    let filteredAndOrderedQuery = query(
      thanksCollection,
      where('TIPO', '==', tipo),
      orderBy('DATAPOST', 'desc')
    );

    return collectionData(filteredAndOrderedQuery, { idField: 'id' });
  }

  //criar thankus
  addThanks( thank : Thankus ) {
    const data = {
      TIPO: thank.tipo,
      MENSAGEM: thank.mensagem,
      NOMEUTIL: thank.nomeUtil,
      DEUTIL: thank.deUtil,
      USERNO: thank.userNo,
      PARAUTIL: thank.paraUtil,
      PARAUSERNO: thank.paraUserNo,
      PHC: thank.phc,
      DATAPOST: thank.dataPost,
      LIKES: thank.likes,
      EDHITECH: thank.edHitech
    };

    let thanksCollection = collection(this.fs, 'ThankUs');
    return addDoc(thanksCollection, data);
  }

  //delete
  deleteThanks(id:string){
    let docRef = doc(this.fs,'ThankUs/'+id);
    return deleteDoc(docRef);
  }

  //busca para quem vai o thankus
  getThanksParaUtil(paraUtil:string){
    let thanksCollection = collection(this.fs, 'ThankUs');
    let filteredAndOrderedQuery = query(
      thanksCollection,
      where('PARAUTIL', '>=', paraUtil),
      where('PARAUTIL', '<=', paraUtil + '\uf8ff')
    );

    return collectionData(filteredAndOrderedQuery, { idField: 'id' });
  }

  //retornando nome de todos que receberam thankus
  getThanksParaUtilAll(){
    let thanksCollection = collection(this.fs, 'ThankUs');
    let filteredAndOrderedQuery = query(
      thanksCollection,
      where('PARAUTIL', '>', '')
    );

    return collectionData(filteredAndOrderedQuery, { idField: 'id' });
  }

}
