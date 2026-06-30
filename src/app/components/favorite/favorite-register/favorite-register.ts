import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Estate } from '../../../models/Estate';
import { Favorite } from '../../../models/Favorite';
import { User } from '../../../models/User';
import { Estateservice } from '../../../services/estateservice';
import { Favoriteservice } from '../../../services/favoriteservice';
import { Userservice } from '../../../services/userservice';

@Component({
  selector: 'app-favorite-register',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './favorite-register.html',
  styleUrl: './favorite-register.css',
})
export class FavoriteRegister implements OnInit {
  favorite: Favorite = new Favorite();
  users: User[] = [];
  estates: Estate[] = [];

  constructor(
    private favoriteService: Favoriteservice,
    private userService: Userservice,
    private estateService: Estateservice,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    const date = new Date();
    this.favorite.creationDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  ngOnInit(): void {
    this.userService.list().subscribe((users) => (this.users = users));
    this.estateService.list().subscribe((estates) => (this.estates = estates));
  }

  save(): void {
    this.favoriteService.insert(this.favorite).subscribe(() => {
      this.snackBar.open('Favorito registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/favorites/list']);
    });
  }

  cancel(): void {
    this.router.navigate(['/favorites/list']);
  }
}
