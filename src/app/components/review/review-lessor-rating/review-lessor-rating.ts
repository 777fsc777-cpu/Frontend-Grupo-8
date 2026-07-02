import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Reviewservice } from '../../../services/reviewservice';
import { ReviewsReviewsLessorRatingDTO } from '../../../models/reviews-reviews-lessor-rating-dto';

@Component({
  selector: 'app-review-lessor-rating',
  imports: [DecimalPipe, MatCardModule, MatIconModule],
  templateUrl: './review-lessor-rating.html',
  styleUrl: './review-lessor-rating.css',
})
export class ReviewLessorRating implements OnInit {
  arrendadores: ReviewsReviewsLessorRatingDTO[] = [];
 
  constructor(private rS: Reviewservice) {}
 
  ngOnInit(): void {
    this.cargarMejoresArrendadores();
  }
 
  cargarMejoresArrendadores() {
    this.rS.bestLessors().subscribe((data) => {
      this.arrendadores = data;
    });
  }
}
