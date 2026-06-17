import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { NotificationModel } from '../../../models/Notification';
import { Notificationservice } from '../../../services/notificationservice';

@Component({
  selector: 'app-notification-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './notification-list.html',
  styleUrl: './notification-list.css',
})
export class NotificationList implements OnInit {
  dataSource: MatTableDataSource<NotificationModel> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  constructor(
    private nS: Notificationservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarNotificaciones();
  }

  cargarNotificaciones() {
    this.nS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.nS.delete(id).subscribe(() => {
      this.snackBar.open('Notificación eliminada correctamente', 'Cerrar', { duration: 3000 });
      this.cargarNotificaciones();
    });
  }
}
