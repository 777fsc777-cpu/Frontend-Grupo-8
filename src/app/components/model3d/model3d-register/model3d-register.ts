import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Model3d } from '../../../models/Model3d';
import { Model3dservice } from '../../../services/model3dservice';
<<<<<<< HEAD

@Component({
  selector: 'app-model3d-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
=======
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-model3d-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule, MatSelectModule],
>>>>>>> dc06b01b444d9e8b3f36deaca1ad29dbbefd41a7
  templateUrl: './model3d-register.html',
  styleUrl: './model3d-register.css',
})
export class Model3dRegister {
  model3d: Model3d = new Model3d();

  constructor(
    private mS: Model3dservice,
    private router: Router,
    private snackBar: MatSnackBar
<<<<<<< HEAD
  ) {
    const d = new Date();
    this.model3d.createDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
=======
  ) {}
>>>>>>> dc06b01b444d9e8b3f36deaca1ad29dbbefd41a7

  aceptar() {
    this.mS.insert(this.model3d).subscribe(() => {
      this.snackBar.open('Modelo 3D registrado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/models3d/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/models3d/list']);
  }
}
