import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Estate } from '../../../models/Estate';
import { Estateservice } from '../../../services/estateservice';

@Component({
  selector: 'app-estate-register',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './estate-register.html',
  styleUrl: './estate-register.css',
})
export class EstateRegister {
  estate: Estate = new Estate();

  constructor(
    private eS: Estateservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  aceptar() {
    this.eS.insert(this.estate).subscribe(() => {
      this.snackBar.open('Inmueble registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/estates/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/estates/list']);
  }
}
