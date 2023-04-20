import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiUrl1 = "http://localhost:3000/all_info";
  apiUrl2 = "http://localhost:3000/addinfo";
  apiUrl3 = "http://localhost:3000/delete";
  apiUrl4 = "http://localhost:3000/getdata";
  constructor(private http:HttpClient) { }

  getAllUser():Observable<any>{
    return this.http.get(`${this.apiUrl1}`)
  }
  addData(data:any):Observable<any>{
    console.log(data,"Data Added Successful");
    return this.http.post(`${this.apiUrl2}`,data)
  } 
  deleteData(id:any):Observable<any>{
    let ids = id;
    
    return this.http.delete(`${this.apiUrl3}/${ids}`)
  }
  getdata(id:any):Observable<any>{
    let ids = id;
    return this.http.get(`${this.apiUrl4}/${ids}`)
  }
  // updatedate(id:any):Observable<any>{
  //   let ids = id;
  //   return this.http.post(`${this.apiUrl2}`,data)
  // }
}
