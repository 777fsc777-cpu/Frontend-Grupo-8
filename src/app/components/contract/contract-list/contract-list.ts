import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Contract } from '../../../models/Contract';
import { Contractservice } from '../../../services/contractservice';

@Component({
  selector: 'app-contract-list',
  imports: [MatTableModule, DatePipe, MatButtonModule, MatIconModule, MatSnackBarModule, RouterLink],
  templateUrl: './contract-list.html',
  styleUrl: './contract-list.css',
})
export class ContractList implements OnInit {
  dataSource: MatTableDataSource<Contract> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9'];

  constructor(
    private cS: Contractservice,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarContratos();
  }

  cargarContratos() {
    this.cS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      this.snackBar.open('Contrato eliminado correctamente', 'Cerrar', { duration: 3000 });
      this.cargarContratos();
    });
  }
}
