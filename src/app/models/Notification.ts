export class NotificationModel {
  idNotification: number = 0;
  title: string = '';
  message: string = '';
  type: string = '';
  read: boolean = false;
  createdDate: string = '';
  idUser: number = 0;
  user?: { idUser: number; username?: string };
}
