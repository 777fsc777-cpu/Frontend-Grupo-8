import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Favorite } from '../models/Favorite';

@Injectable({
  providedIn: 'root',
})
export class Favoriteservice {
  private url = `${environment.base}/Favorite`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Favorite[]>(this.url);
  }

  insert(favorite: Favorite) {
    return this.http.post(this.url, this.armarEnvio(favorite));
  }

  listId(id: number) {
    return this.http.get<Favorite>(`${this.url}/listId/${id}`);
  }

  update(favorite: Favorite) {
    return this.http.put(this.url, {
      ...this.armarEnvio(favorite),
      idFavorite: favorite.idFavorite,
    });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  private armarEnvio(favorite: Favorite) {
    return {
      creationDate: favorite.creationDate,
      user: { idUser: favorite.idUser },
      estate: { idEstate: favorite.idEstate },
    };
  }
}
