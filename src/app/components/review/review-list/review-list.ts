import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Review } from '../../../models/Review';
import { Reviewservice } from '../../../services/reviewservice';

@Component({
  selector: 'app-review-list',
  imports: [MatTableModule, DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './review-list.html',
  styleUrl: './review-list.css',
})
export class ReviewList implements OnInit {
  dataSource: MatTableDataSource<Review> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  constructor(
    private rS: Reviewservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarResenias();
  }

  cargarResenias() {
    this.rS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.rS.delete(id).subscribe(() => {
      this.snackBar.open('Reseña eliminada correctamente', 'Cerrar', { duration: 3000 });
      this.cargarResenias();
    });
  }
}
