import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RiskPoint } from '../../../models/RiskPoint';
import { Riskpointservice } from '../../../services/riskpointservice';

@Component({
  selector: 'app-risk-point-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './risk-point-register.html',
  styleUrl: './risk-point-register.css',
})
export class RiskPointRegister {
  riskPoint: RiskPoint = new RiskPoint();

  constructor(
    private rS: Riskpointservice,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  aceptar() {
    this.rS.insert(this.riskPoint).subscribe(() => {
      this.snackBar.open('Punto de riesgo registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/risk-points/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/risk-points/list']);
  }
}
