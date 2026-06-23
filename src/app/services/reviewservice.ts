import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Review } from '../models/Review';

@Injectable({
  providedIn: 'root',
})
export class Reviewservice {
  private url = `${environment.base}/Reviews`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Review[]>(this.url);
  }

  insert(review: Review) {
    return this.http.post(this.url, review, { responseType: 'text' });
  }

  listId(id: number) {
    return this.http.get<Review>(`${this.url}/listId/${id}`);
  }

  update(id: number, review: Review) {
    return this.http.put(`${this.url}/actualizar/${id}`, review,{ responseType: 'text' });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`,{ responseType: 'text' });
  }
}
