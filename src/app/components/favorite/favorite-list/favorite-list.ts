import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Favorite } from '../../../models/Favorite';
import { Favoriteservice } from '../../../services/favoriteservice';

@Component({
  selector: 'app-favorite-list',
  imports: [MatTableModule, DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './favorite-list.html',
  styleUrl: './favorite-list.css',
})
export class FavoriteList implements OnInit {
  dataSource: MatTableDataSource<Favorite> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

  constructor(
    private fS: Favoriteservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.fS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.fS.delete(id).subscribe(() => {
      this.snackBar.open('Favorito eliminado correctamente', 'Cerrar', { duration: 3000 });
      this.cargarFavoritos();
    });
  }
}
