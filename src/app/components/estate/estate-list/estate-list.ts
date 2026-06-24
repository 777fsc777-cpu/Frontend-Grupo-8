import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Estate } from '../../../models/Estate';
import { Estateservice } from '../../../services/estateservice';

@Component({
  selector: 'app-estate-list',
  imports: [AsyncPipe, MatCardModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './estate-list.html',
  styleUrl: './estate-list.css',
})
export class EstateList implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Estate> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private eS: Estateservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.cargarInmuebles();
  }

  cargarInmuebles() {
    this.eS.list().subscribe((data) => {
      this.dataSource.data = data;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
        this.paginator.firstPage();
      }
    });
  }

  eliminar(id: number) {
    this.eS.delete(id).subscribe(() => {
      this.snackBar.open('Inmueble eliminado correctamente', 'Cerrar', { duration: 3000 });
      this.cargarInmuebles();
    });
  }
}
