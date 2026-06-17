import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationModel } from '../../../models/Notification';
import { Notificationservice } from '../../../services/notificationservice';

@Component({
  selector: 'app-notification-update',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './notification-update.html',
  styleUrl: './notification-update.css',
})
export class NotificationUpdate implements OnInit {
  notification: NotificationModel = new NotificationModel();
  id: number = 0;

  constructor(
    private nS: Notificationservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.nS.listId(this.id).subscribe((data) => {
      this.notification = data;
      this.notification.idUser = data.user?.idUser ?? data.idUser;
      this.notification.idNotification = this.id;
    });
  }

  aceptar() {
    this.nS.update(this.notification).subscribe(() => {
      this.snackBar.open('Notificación actualizada correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/notifications/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/notifications/list']);
  }
}
