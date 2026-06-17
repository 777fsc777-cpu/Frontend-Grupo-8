import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Estate } from '../../../models/Estate';
import { Estateservice } from '../../../services/estateservice';

@Component({
  selector: 'app-estate-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './estate-list.html',
  styleUrl: './estate-list.css',
})
export class EstateList implements OnInit {
  dataSource: MatTableDataSource<Estate> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'];

  constructor(
    private eS: Estateservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarInmuebles();
  }

  cargarInmuebles() {
    this.eS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.eS.delete(id).subscribe(() => {
      this.snackBar.open('Inmueble eliminado correctamente', 'Cerrar', { duration: 3000 });
      this.cargarInmuebles();
    });
  }
}
