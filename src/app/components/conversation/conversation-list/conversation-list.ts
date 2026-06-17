import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Conversation } from '../../../models/Conversation';
import { Conversationservice } from '../../../services/conversationservice';

@Component({
  selector: 'app-conversation-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './conversation-list.html',
  styleUrl: './conversation-list.css',
})
export class ConversationList implements OnInit {
  dataSource: MatTableDataSource<Conversation> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'];

  constructor(
    private cS: Conversationservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarConversaciones();
  }

  cargarConversaciones() {
    this.cS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.snackBar.open('Conversación eliminada correctamente', 'Cerrar', { duration: 3000 });
      this.cargarConversaciones();
    });
  }
}
