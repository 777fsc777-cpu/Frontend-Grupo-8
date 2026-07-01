import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContractAverageDurationDTO } from '../../../models/contract-average-duration-dto';
import { Contractservice } from '../../../services/contractservice';

@Component({
  selector: 'app-contract-average-duration-by-lessor',
  imports: [MatCardModule, MatIconModule, DecimalPipe],
  templateUrl: './contract-average-duration-lessor.html',
  styleUrl: './contract-average-duration-lessor.css',
})
export class ContractAverageDurationByLessor implements OnInit {
  arrendadores: ContractAverageDurationDTO[] = [];

  constructor(private cS: Contractservice) {}

  ngOnInit(): void {
    this.cargarDuracionPromedioPorArrendador();
  }

  cargarDuracionPromedioPorArrendador() {
    this.cS.averageDurationByLessor().subscribe((data) => {
      this.arrendadores = data;
    });
  }
}
