import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Conversation } from '../../../models/Conversation';
import { Conversationservice } from '../../../services/conversationservice';

@Component({
  selector: 'app-conversation-update',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './conversation-update.html',
  styleUrl: './conversation-update.css',
})
export class ConversationUpdate implements OnInit {
  conversation: Conversation = new Conversation();
  id: number = 0;

  constructor(
    private cS: Conversationservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cS.listId(this.id).subscribe((data) => {
      this.conversation = data;
      this.conversation.id = data.idConversation ?? data.id;
      this.conversation.idUser1 = data.user1?.idUser ?? data.idUser1;
      this.conversation.idUser2 = data.user2?.idUser ?? data.idUser2;
      this.conversation.idEstate = data.estate?.idEstate ?? data.idEstate;
    });
  }

  aceptar() {
    this.cS.update(this.conversation).subscribe(() => {
      this.snackBar.open('Conversación actualizada correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/conversations/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/conversations/list']);
  }
}
