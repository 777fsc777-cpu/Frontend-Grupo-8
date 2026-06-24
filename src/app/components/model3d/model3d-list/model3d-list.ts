import { AsyncPipe, DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Model3d } from '../../../models/Model3d';
import { Model3dservice } from '../../../services/model3dservice';

@Component({
  selector: 'app-model3d-list',
  imports: [AsyncPipe, MatCardModule, MatTableModule, MatPaginatorModule, DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './model3d-list.html',
  styleUrl: './model3d-list.css',
})
export class Model3dList implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Model3d> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private mS: Model3dservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.cargarModelos();
  }

  cargarModelos() {
    this.mS.list().subscribe((data) => {
      this.dataSource.data = data;
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
        this.paginator.firstPage();
      }
    });
  }

  eliminar(id: number) {
    this.mS.delete(id).subscribe(() => {
      this.snackBar.open('Modelo 3D eliminado correctamente', 'Cerrar', { duration: 3000 });
      this.cargarModelos();
    });
  }
}
