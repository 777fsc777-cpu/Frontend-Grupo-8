import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root',
})
export class Messageservice {
  private url = `${environment.base}/Messages`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Message[]>(`${this.url}/listar`);
  }

  insert(message: Message) {
    return this.http.post(`${this.url}/registrar`, message);
  }

  listId(id: number) {
    return this.http.get<Message>(`${this.url}/${id}`);
  }

  update(id: number, message: Message) {
    return this.http.put(`${this.url}/actualizar/${id}`, message);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
