import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Estate } from '../models/Estate';

@Injectable({
  providedIn: 'root',
})
export class Estateservice {
  private url = `${environment.base}/Estate`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Estate[]>(`${this.url}/listAll`);
  }

  insert(estate: Estate) {
    return this.http.post(this.url, estate, { responseType: 'text' });
  }

  listId(id: number) {
    return this.http.get<Estate>(`${this.url}/listId/${id}`);
  }

  update(estate: Estate) {
    return this.http.put(`${this.url}/actualizar`, {
      ...estate,
      idUser: { idUser: estate.idUser },
    }, { responseType: 'text' });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
}
