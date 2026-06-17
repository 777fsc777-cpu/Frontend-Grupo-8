import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Conversation } from '../models/Conversation';

@Injectable({
  providedIn: 'root',
})
export class Conversationservice {
  private url = `${environment.base}/Conversations`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Conversation[]>(this.url);
  }

  insert(conversation: Conversation) {
    return this.http.post(this.url, conversation);
  }

  listId(id: number) {
    return this.http.get<Conversation>(`${this.url}/listId/${id}`);
  }

  update(conversation: Conversation) {
    return this.http.put(`${this.url}/actualizar`, conversation);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
