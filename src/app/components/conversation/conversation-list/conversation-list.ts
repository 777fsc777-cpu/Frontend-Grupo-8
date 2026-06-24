import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Conversation } from '../../../models/Conversation';
import { Conversationservice } from '../../../services/conversationservice';

@Component({
  selector: 'app-conversation-list',
  imports: [AsyncPipe, MatCardModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './conversation-list.html',
  styleUrl: './conversation-list.css',
})
export class ConversationList implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Conversation> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private cS: Conversationservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.cargarConversaciones();
  }

  cargarConversaciones() {
    this.cS.list().subscribe((data) => {
      this.dataSource.data = data;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
        this.paginator.firstPage();
      }
    });
  }

  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.snackBar.open('Conversación eliminada correctamente', 'Cerrar', { duration: 3000 });
      this.cargarConversaciones();
    });
  }
}
