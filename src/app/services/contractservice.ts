import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Contract } from '../models/Contract';

@Injectable({
  providedIn: 'root',
})
export class Contractservice {
  private url = `${environment.base}/Contracts`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Contract[]>(`${this.url}/list`);
  }

  insert(contract: Contract) {
    return this.http.post(this.url, contract);
  }

  listId(id: number) {
    return this.http.get<Contract>(`${this.url}/${id}`);
  }

  update(contract: Contract) {
    return this.http.put(this.url, contract);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
