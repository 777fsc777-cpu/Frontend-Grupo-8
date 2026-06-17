import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../../../models/Review';
import { Reviewservice } from '../../../services/reviewservice';

@Component({
  selector: 'app-review-update',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './review-update.html',
  styleUrl: './review-update.css',
})
export class ReviewUpdate implements OnInit {
  review: Review = new Review();
  id: number = 0;

  constructor(
    private rS: Reviewservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.rS.listId(this.id).subscribe((data) => {
      this.review = data;
      this.review.idUser = data.user?.idUser ?? data.idUser;
      this.review.idEstate = data.estate?.idEstate ?? data.idEstate;
    });
  }

  aceptar() {
    this.rS.update(this.id, this.review).subscribe(() => {
      this.snackBar.open('Reseña actualizada correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/reviews/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/reviews/list']);
  }
}
