import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Message } from '../../../models/Message';
import { Messageservice } from '../../../services/messageservice';

@Component({
  selector: 'app-message-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './message-register.html',
  styleUrl: './message-register.css',
})
export class MessageRegister {
  message: Message = new Message();

  constructor(
    private mS: Messageservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  aceptar() {
    this.mS.insert(this.message).subscribe(() => {
      this.snackBar.open('Mensaje registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/messages/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/messages/list']);
  }
}
