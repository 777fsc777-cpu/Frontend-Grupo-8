import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Estate } from '../../../models/Estate';
import { Estateservice } from '../../../services/estateservice';

@Component({
  selector: 'app-estate-update',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './estate-update.html',
  styleUrl: './estate-update.css',
})
export class EstateUpdate implements OnInit {
  estate: Estate = new Estate();
  id: number = 0;

  constructor(
    private eS: Estateservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.eS.listId(this.id).subscribe((data) => {
      this.estate = data;
      this.estate.idUser = data.user?.idUser ?? data.idUser;
    });
  }

  aceptar() {
    this.eS.update(this.estate).subscribe(() => {
      this.snackBar.open('Inmueble actualizado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/estates/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/estates/list']);
  }
}
