import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { RiskPoint } from '../../../models/RiskPoint';
import { Riskpointservice } from '../../../services/riskpointservice';

@Component({
  selector: 'app-risk-point-update',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './risk-point-update.html',
  styleUrl: './risk-point-update.css',
})
export class RiskPointUpdate implements OnInit {
  riskPoint: RiskPoint = new RiskPoint();
  id: number = 0;

  constructor(
    private rS: Riskpointservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.rS.listId(this.id).subscribe((data) => {
      this.riskPoint = data;
      this.riskPoint.idModel3D = (data as any).idModel3D?.idModels3D ?? data.idModel3D;
    });
  }

  aceptar() {
    this.rS.update(this.id, this.riskPoint).subscribe(() => {
      this.snackBar.open('Punto de riesgo actualizado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/risk-points/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/risk-points/list']);
  }
}
