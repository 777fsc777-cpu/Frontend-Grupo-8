import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Background } from '../../../models/Background';
import { Backgroundservice } from '../../../services/backgroundservice';

@Component({
  selector: 'app-background-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './background-register.html',
  styleUrl: './background-register.css',
})
export class BackgroundRegister {
  background: Background = new Background();

  constructor(
    private bS: Backgroundservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    const d = new Date();
    this.background.registrationDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  aceptar() {
    this.bS.insert(this.background).subscribe(() => {
      this.snackBar.open('Antecedente registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/backgrounds/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/backgrounds/list']);
  }
}
