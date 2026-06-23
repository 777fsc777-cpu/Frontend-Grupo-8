import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { NotificationModel } from '../models/Notification';

@Injectable({
  providedIn: 'root',
})
export class Notificationservice {
  private url = `${environment.base}/Notifications`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<NotificationModel[]>(`${this.url}/list`);
  }

  insert(notification: NotificationModel) {
    return this.http.post(`${this.url}/Registrar`, this.armarEnvio(notification),{ responseType: 'text' });
  }

  listId(id: number) {
    return this.http.get<NotificationModel>(`${this.url}/${id}`);
  }

  update(notification: NotificationModel) {
    return this.http.put(`${this.url}/actualizar`, {
      ...this.armarEnvio(notification),
      idNotification: notification.idNotification,
    }, { responseType: 'text' });
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`,{ responseType: 'text' });
  }

  private armarEnvio(notification: NotificationModel) {
    return {
      title: notification.title,
      message: notification.message,
      type: notification.type,
      read: notification.read,
      createdDate: notification.createdDate,
      user: { idUser: notification.idUser },
    };
  }
}
