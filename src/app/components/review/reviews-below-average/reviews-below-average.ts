import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReviewsBelowAverageDTO } from '../../../models/reviews-below-average-dto';
import { Reviewservice } from '../../../services/reviewservice';

@Component({
  selector: 'app-reviews-below-average',
  imports: [DecimalPipe, MatCardModule, MatIconModule],
  templateUrl: './reviews-below-average.html',
  styleUrl: './reviews-below-average.css',
})
export class ReviewsBelowAverage implements OnInit {
 inmuebles: ReviewsBelowAverageDTO[] = [];
 
  constructor(private rS: Reviewservice) {}
 
  ngOnInit(): void {
    this.cargarInmueblesDebajoDelPromedio();
  }
 
  cargarInmueblesDebajoDelPromedio() {
    this.rS.belowAverage().subscribe((data) => {
      this.inmuebles = data;
    });
  }
}
