import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Sub } from '../models/sub';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private afs: AngularFirestore) { }

  addSubscriber(data: Sub) {
    this.afs.collection("subscribers").add(data).then(() => {
      console.log("done")
    })
  }

  checkDeplicateEmail(email: string) {
    return this.afs.collection("subscribers" , ref=>ref.where("email" , "==" , email)).get()
  }
}
