import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../../models/User';
import { Userservice } from '../../../services/userservice';

@Component({
  selector: 'app-user-register',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './user-register.html',
  styleUrl: './user-register.css',
})
export class UserRegister {
  user: User = new User();

  constructor(
    private uS: Userservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  aceptar() {
    this.uS.insert(this.user).subscribe(() => {
      this.snackBar.open('Usuario registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/users/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/users/list']);
  }
}
