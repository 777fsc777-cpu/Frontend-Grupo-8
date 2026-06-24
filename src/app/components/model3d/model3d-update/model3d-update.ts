import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Model3d } from '../../../models/Model3d';
import { Model3dservice } from '../../../services/model3dservice';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-model3d-update',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatSelectModule],
  templateUrl: './model3d-update.html',
  styleUrl: './model3d-update.css',
})
export class Model3dUpdate implements OnInit {
  model3d: Model3d = new Model3d();
  id: number = 0;

  constructor(
    private mS: Model3dservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.mS.listId(this.id).subscribe((data) => {
      this.model3d = data;
      this.model3d.idEstate = data.estate?.idEstate ?? data.idEstate;
    });
  }

  aceptar() {
    this.mS.update(this.model3d).subscribe(() => {
      this.snackBar.open('Modelo 3D actualizado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/models3d/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/models3d/list']);
  }
}
