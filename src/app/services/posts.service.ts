import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection } from '@angular/fire/firestore';
  import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  const baseUrl: string = `https://api.myjson.com/bins/rzfyq`
 constructor(private service: HttpClient, private firestore: AngularFirestore){

 }
 getPosts():Observable<any[]>{
  //  console.log(this.firestore.collection('/posts'));
  //  return this.service.get(this.baseUrl)
  return this.firestore.collection('posts').snapshotChanges();
 }
}