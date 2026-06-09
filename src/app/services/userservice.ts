import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  private url = `${environment.base}/Users`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<User[]>(`${this.url}/listar`);
  }
}
