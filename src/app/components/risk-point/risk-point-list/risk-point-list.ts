import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { RiskPoint } from '../../../models/RiskPoint';
import { Riskpointservice } from '../../../services/riskpointservice';

@Component({
  selector: 'app-risk-point-list',
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './risk-point-list.html',
  styleUrl: './risk-point-list.css',
})
export class RiskPointList implements OnInit {
  dataSource: MatTableDataSource<RiskPoint> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  constructor(
    private rS: Riskpointservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarPuntos();
  }

  cargarPuntos() {
    this.rS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.rS.delete(id).subscribe(() => {
      this.snackBar.open('Punto de riesgo eliminado correctamente', 'Cerrar', { duration: 3000 });
      this.cargarPuntos();
    });
  }
}
