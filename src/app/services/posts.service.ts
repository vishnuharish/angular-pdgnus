import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '@angular/'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  const baseUrl: string = `https://api.myjson.com/bins/rzfyq`
 constructor(private service: HttpClient){

 }
 getPosts():Observable<any[]>{
   return this.service.get(this.baseUrl)
 }
}