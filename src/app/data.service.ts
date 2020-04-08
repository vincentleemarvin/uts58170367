import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'https://crudcrud.com/api/2a93e132c7cf4ef0bf2352e7b51995d0'; 

  constructor(private http: HttpClient) { }

  // getMatkul() {
  //   return this.http.get(`${this.baseUrl}/first`);
  // }

  // getMatkul(id: number) {
  //   return this.http.get(`${this.baseUrl}/first/${id}`);
  // }

  // postHero() {
  //   delete hero._id; 
  //   return this.http.post(`${this.baseUrl}/first`);
  // }

  // updateHero() {
  //   const id = hero._id; 
  //   delete hero._id; 
  //   return this.http.put(`${this.baseUrl}/hero/${id}`, hero);
  // }

  // deleteHero() {
  //   const id = hero._id;
  //   return this.http.delete(`${this.baseUrl}/hero/${id}`);
  // }
}
