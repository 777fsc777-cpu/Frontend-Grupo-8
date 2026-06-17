import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Background } from '../../../models/Background';
import { Backgroundservice } from '../../../services/backgroundservice';

@Component({
  selector: 'app-background-update',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './background-update.html',
  styleUrl: './background-update.css',
})
export class BackgroundUpdate implements OnInit {
  background: Background = new Background();
  id: number = 0;

  constructor(
    private bS: Backgroundservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.bS.listId(this.id).subscribe((data) => {
      this.background = data;
      this.background.idUser = data.user?.idUser ?? data.idUser;
    });
  }

  aceptar() {
    this.bS.update(this.id, this.background).subscribe(() => {
      this.snackBar.open('Antecedente actualizado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/backgrounds/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/backgrounds/list']);
  }
}
