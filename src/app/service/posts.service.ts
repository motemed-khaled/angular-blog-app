import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import * as firebase from "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore) { }

  loadFeatured() {
    return this.afs
      .collection('posts' , ref=>ref.where("isFeature","==",true))
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  loadLatest() {
    return this.afs
      .collection('posts' , ref=>ref.orderBy("createdAt"))
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  loadCategoryPost(catId:string) {
    return this.afs
      .collection('posts' , ref=>ref.where("category.categoryId","==",catId))
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  loadOnePost(id: string) {
    return this.afs.collection("posts").doc(id).valueChanges()
  }

  loadCategorySimilar(catId:string) {
    return this.afs
      .collection('posts' , ref=>ref.where("category.categoryId","==",catId))
      .snapshotChanges()
      .pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
          });
        })
      );
  }

  updateViews(postId: string) {
    const viewsCount = {
      views: firebase.increment(1)
    }
    this.afs.collection("posts").doc(postId).update(viewsCount);
  }
}
