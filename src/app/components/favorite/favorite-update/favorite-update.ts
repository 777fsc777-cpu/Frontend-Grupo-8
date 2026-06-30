import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Estate } from '../../../models/Estate';
import { Favorite } from '../../../models/Favorite';
import { User } from '../../../models/User';
import { Estateservice } from '../../../services/estateservice';
import { Favoriteservice } from '../../../services/favoriteservice';
import { Userservice } from '../../../services/userservice';

@Component({
  selector: 'app-favorite-update',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './favorite-update.html',
  styleUrl: './favorite-update.css',
})
export class FavoriteUpdate implements OnInit {
  favorite: Favorite = new Favorite();
  users: User[] = [];
  estates: Estate[] = [];
  id: number = 0;

  constructor(
    private favoriteService: Favoriteservice,
    private userService: Userservice,
    private estateService: Estateservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.list().subscribe((users) => (this.users = users));
    this.estateService.list().subscribe((estates) => (this.estates = estates));
    this.favoriteService.listId(this.id).subscribe((data) => {
      this.favorite = data;
      this.favorite.idUser = data.user?.idUser ?? data.idUser;
      this.favorite.idEstate = data.estate?.idEstate ?? data.idEstate;
    });
  }

  save(): void {
    this.favoriteService.update(this.favorite).subscribe(() => {
      this.snackBar.open('Favorito actualizado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/favorites/list']);
    });
  }

  cancel(): void {
    this.router.navigate(['/favorites/list']);
  }
}
