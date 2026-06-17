import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Message } from '../../../models/Message';
import { Messageservice } from '../../../services/messageservice';

@Component({
  selector: 'app-message-list',
  imports: [MatTableModule, DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList implements OnInit {
  dataSource: MatTableDataSource<Message> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  constructor(
    private mS: Messageservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarMensajes();
  }

  cargarMensajes() {
    this.mS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.mS.delete(id).subscribe(() => {
      this.snackBar.open('Mensaje eliminado correctamente', 'Cerrar', { duration: 3000 });
      this.cargarMensajes();
    });
  }
}
