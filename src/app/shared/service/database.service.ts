import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iobj } from '../model/model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
 url :string =`https://angular-crud-78422-default-rtdb.asia-southeast1.firebasedatabase.app/post.json`

  constructor(private _http: HttpClient) { }
 
getAlldata():Observable<Iobj[]>{
  return this._http.get(this.url).pipe(
    map((res:any)=>{
      let arr =[];
      for (const key in res) {
       let obj = {...res[key],id:key}
       arr.push(obj)
      }
      return arr
    })
  )
}

getPostData(obj:Iobj){
  return this._http.post(this.url,obj)
}
  

}


