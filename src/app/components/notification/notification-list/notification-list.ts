import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { NotificationModel } from '../../../models/Notification';
import { Notificationservice } from '../../../services/notificationservice';

@Component({
  selector: 'app-notification-list',
  imports: [AsyncPipe, MatCardModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './notification-list.html',
  styleUrl: './notification-list.css',
})
export class NotificationList implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<NotificationModel> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private nS: Notificationservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.cargarNotificaciones();
  }

  cargarNotificaciones() {
    this.nS.list().subscribe((data) => {
      this.dataSource.data = data;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
        this.paginator.firstPage();
      }
    });
  }

  eliminar(id: number) {
    this.nS.delete(id).subscribe(() => {
      this.snackBar.open('Notificación eliminada correctamente', 'Cerrar', { duration: 3000 });
      this.cargarNotificaciones();
    });
  }
}
