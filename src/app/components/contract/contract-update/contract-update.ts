import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '../../../models/Contract';
import { Contractservice } from '../../../services/contractservice';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-contract-update',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './contract-update.html',
  styleUrl: './contract-update.css',
})
export class ContractUpdate implements OnInit {
  contract: Contract = new Contract();
  id: number = 0;

  constructor(
    private cS: Contractservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.cS.listId(this.id).subscribe((data) => {
      this.contract = data;
    });
  }

  aceptar() {
    this.cS.update(this.contract).subscribe(() => {
      this.snackBar.open('Contrato actualizado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/contracts/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/contracts/list']);
  }
}
