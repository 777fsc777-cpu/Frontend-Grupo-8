import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Reviewservice } from '../../../services/reviewservice';
import { ReviewsReviewsNoReviewEstateDTO } from '../../../models/reviews-reviews-no-review-estate-dto';
@Component({
  selector: 'app-review-no-review-estate',
  imports: [CurrencyPipe, MatCardModule, MatIconModule],
  templateUrl: './review-no-review-estate.html',
  styleUrl: './review-no-review-estate.css',
})
export class ReviewNoReviewEstate implements OnInit {
  inmuebles: ReviewsReviewsNoReviewEstateDTO[] = [];
 
  constructor(private rS: Reviewservice) {}
 
  ngOnInit(): void {
    this.cargarInmueblesSinResenas();
  }
 
  cargarInmueblesSinResenas() {
    this.rS.noReviews().subscribe((data) => {
      this.inmuebles = data;
    });
  }

}
