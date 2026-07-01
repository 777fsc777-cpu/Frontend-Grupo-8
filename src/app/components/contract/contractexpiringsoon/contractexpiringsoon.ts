import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ContractExpiringDTO } from '../../../models/contract-expiring-dto';
import { Contractservice } from '../../../services/contractservice';

@Component({
  selector: 'app-contractexpiringsoon',
  imports: [MatCardModule, MatIconModule, DatePipe],
  templateUrl: './contractexpiringsoon.html',
  styleUrl: './contractexpiringsoon.css',
})
export class Contractexpiringsoon implements OnInit{
  contratos: ContractExpiringDTO[] = [];
 
  constructor(private cS: Contractservice) {}
 
  ngOnInit(): void {
    this.cargarContratosPorVencer();
  }
 
  cargarContratosPorVencer() {
    this.cS.expiringSoon().subscribe((data) => {
      this.contratos = data;
    });
  }
}
