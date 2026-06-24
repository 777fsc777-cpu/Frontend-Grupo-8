import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotificationModel } from '../../../models/Notification';
import { Notificationservice } from '../../../services/notificationservice';

@Component({
  selector: 'app-notification-register',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './notification-register.html',
  styleUrl: './notification-register.css',
})
export class NotificationRegister {
  notification: NotificationModel = new NotificationModel();

  constructor(
    private nS: Notificationservice,
    private router: Router,
    private snackBar: MatSnackBar
<<<<<<< HEAD
  ) {
    const d = new Date();
    this.notification.createdDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
=======
  ) {}
>>>>>>> dc06b01b444d9e8b3f36deaca1ad29dbbefd41a7

  aceptar() {
    this.nS.insert(this.notification).subscribe(() => {
      this.snackBar.open('Notificación registrada correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/notifications/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/notifications/list']);
  }
}
