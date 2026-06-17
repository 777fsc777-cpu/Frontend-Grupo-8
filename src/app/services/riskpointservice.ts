import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RiskPoint } from '../models/RiskPoint';

@Injectable({
  providedIn: 'root',
})
export class Riskpointservice {
  private url = `${environment.base}/RiskPoints`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<RiskPoint[]>(this.url);
  }

  insert(riskPoint: RiskPoint) {
    return this.http.post(this.url, riskPoint);
  }

  listId(id: number) {
    return this.http.get<RiskPoint>(`${this.url}/listId/${id}`);
  }

  update(id: number, riskPoint: RiskPoint) {
    return this.http.put(`${this.url}/actualizar/${id}`, {
      ...riskPoint,
      idModel3D: { idModels3D: riskPoint.idModel3D },
    });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/eliminar/${id}`);
  }
}
