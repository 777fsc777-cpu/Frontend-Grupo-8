import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { RiskReport } from '../../../models/RiskReport';
import { Riskreportservice } from '../../../services/riskreportservice';

@Component({
  selector: 'app-risk-report-list',
  imports: [MatTableModule, DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './risk-report-list.html',
  styleUrl: './risk-report-list.css',
})
export class RiskReportList implements OnInit {
  dataSource: MatTableDataSource<RiskReport> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

  constructor(
    private rS: Riskreportservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarReportes();
  }

  cargarReportes() {
    this.rS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.rS.delete(id).subscribe(() => {
      this.snackBar.open('Reporte eliminado correctamente', 'Cerrar', { duration: 3000 });
      this.cargarReportes();
    });
  }
}
