import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Contract } from '../models/Contract';
import { ContractExpiringDTO } from '../models/contract-expiring-dto';

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
    return this.http.post(this.url, contract, { responseType: 'text' });
  }

  listId(id: number) {
    return this.http.get<Contract>(`${this.url}/${id}`);
  }

  update(contract: Contract) {
    return this.http.put(this.url, contract, { responseType: 'text' });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }
  expiringSoon() {
    return this.http.get<ContractExpiringDTO[]>(`${this.url}/expiring-soon`);
  }

}
