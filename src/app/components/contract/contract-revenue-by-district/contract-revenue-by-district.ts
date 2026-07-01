import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Contractservice } from '../../../services/contractservice';
import { ContractRevenueDistrictDTO } from '../../../models/contract-revenue-district-dto';

@Component({
  selector: 'app-contract-revenue-by-district',
  imports: [MatCardModule, MatIconModule, CurrencyPipe],
  templateUrl: './contract-revenue-by-district.html',
  styleUrl: './contract-revenue-by-district.css',
})
export class ContractRevenueByDistrict implements OnInit {
  distritos: ContractRevenueDistrictDTO[] = [];

  constructor(private cS: Contractservice) {}

  ngOnInit(): void {
    this.cargarIngresosPorDistrito();
  }

  cargarIngresosPorDistrito() {
    this.cS.revenueByDistrict().subscribe((data) => {
      this.distritos = data;
    });
  }
}