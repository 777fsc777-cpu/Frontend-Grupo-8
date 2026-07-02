import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Reviewservice } from '../../../services/reviewservice';
import { ReviewsReviewsRatingDistributionDTO } from '../../../models/reviews-reviews-rating-distribution-dto';
@Component({
  selector: 'app-review-rating-distribution',
  imports: [DecimalPipe, MatCardModule, MatIconModule],
  templateUrl: './review-rating-distribution.html',
  styleUrl: './review-rating-distribution.css',
})
export class ReviewRatingDistribution implements OnInit {
  distribucion: ReviewsReviewsRatingDistributionDTO[] = [];
 
  constructor(private rS: Reviewservice) {}
 
  ngOnInit(): void {
    this.cargarDistribucionDeCalificaciones();
  }
 
  cargarDistribucionDeCalificaciones() {
    this.rS.ratingDistribution().subscribe((data) => {
      this.distribucion = data;
    });
  }

}
