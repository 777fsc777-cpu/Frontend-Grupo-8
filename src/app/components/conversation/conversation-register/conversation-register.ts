import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Conversation } from '../../../models/Conversation';
import { Conversationservice } from '../../../services/conversationservice';

@Component({
  selector: 'app-conversation-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './conversation-register.html',
  styleUrl: './conversation-register.css',
})
export class ConversationRegister {
  conversation: Conversation = new Conversation();

  constructor(
    private cS: Conversationservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  aceptar() {
    this.cS.insert(this.conversation).subscribe(() => {
      this.snackBar.open('Conversación registrada correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/conversations/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/conversations/list']);
  }
}
