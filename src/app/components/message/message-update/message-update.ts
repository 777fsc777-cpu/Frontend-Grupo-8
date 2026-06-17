import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../../../models/Message';
import { Messageservice } from '../../../services/messageservice';

@Component({
  selector: 'app-message-update',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './message-update.html',
  styleUrl: './message-update.css',
})
export class MessageUpdate implements OnInit {
  message: Message = new Message();
  id: number = 0;

  constructor(
    private mS: Messageservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.mS.listId(this.id).subscribe((data) => {
      this.message = data;
      this.message.idConversation = data.conversation?.idConversation ?? data.idConversation;
      this.message.idUser = data.user?.idUser ?? data.idUser;
    });
  }

  aceptar() {
    this.mS.update(this.id, this.message).subscribe(() => {
      this.snackBar.open('Mensaje actualizado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/messages/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/messages/list']);
  }
}
