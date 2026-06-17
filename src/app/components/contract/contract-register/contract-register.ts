import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Contract } from '../../../models/Contract';
import { Contractservice } from '../../../services/contractservice';

@Component({
  selector: 'app-contract-register',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './contract-register.html',
  styleUrl: './contract-register.css',
})
export class ContractRegister {
  contract: Contract = new Contract();

  constructor(
    private cS: Contractservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  aceptar() {
    this.cS.insert(this.contract).subscribe(() => {
      this.snackBar.open('Contrato registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/contracts/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/contracts/list']);
  }
}
