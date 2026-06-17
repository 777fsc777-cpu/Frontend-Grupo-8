import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Favorite } from '../../../models/Favorite';
import { Favoriteservice } from '../../../services/favoriteservice';

@Component({
  selector: 'app-favorite-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './favorite-register.html',
  styleUrl: './favorite-register.css',
})
export class FavoriteRegister {
  favorite: Favorite = new Favorite();

  constructor(
    private fS: Favoriteservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  aceptar() {
    this.fS.insert(this.favorite).subscribe(() => {
      this.snackBar.open('Favorito registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/favorites/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/favorites/list']);
  }
}
