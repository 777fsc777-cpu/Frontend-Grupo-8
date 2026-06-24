<<<<<<< HEAD
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
=======
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
>>>>>>> dc06b01b444d9e8b3f36deaca1ad29dbbefd41a7
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
<<<<<<< HEAD
  ) {
    const d = new Date();
    this.estate.creationDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
=======
  ) {}
>>>>>>> dc06b01b444d9e8b3f36deaca1ad29dbbefd41a7

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
