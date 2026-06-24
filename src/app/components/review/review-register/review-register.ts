import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Review } from '../../../models/Review';
import { Reviewservice } from '../../../services/reviewservice';

@Component({
  selector: 'app-review-register',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './review-register.html',
  styleUrl: './review-register.css',
})
export class ReviewRegister {
  review: Review = new Review();

  constructor(
    private rS: Reviewservice,
    private router: Router,
    private snackBar: MatSnackBar
<<<<<<< HEAD
  ) {
    const d = new Date();
    this.review.creationDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
=======
  ) {}
>>>>>>> dc06b01b444d9e8b3f36deaca1ad29dbbefd41a7

  aceptar() {
    this.rS.insert(this.review).subscribe(() => {
      this.snackBar.open('Reseña registrada correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/reviews/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/reviews/list']);
  }
}
