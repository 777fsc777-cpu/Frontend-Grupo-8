import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { LoginService } from '../../services/login-service';
import { ContractAverageDurationByLessor } from './contract/contract-average-duration-lessor/contract-average-duration-lessor';
import { ContractRevenueByDistrict } from './contract/contract-revenue-by-district/contract-revenue-by-district';
import { Contractexpiringsoon } from './contract/contractexpiringsoon/contractexpiringsoon';
import { ReviewLessorRating } from './review/review-lessor-rating/review-lessor-rating';
import { ReviewNoReviewEstate } from './review/review-no-review-estate/review-no-review-estate';
import { ReviewRatingDistribution } from './review/review-rating-distribution/review-rating-distribution';
import { ReviewsBelowAverage } from './review/reviews-below-average/reviews-below-average';
import { HighRiskReport } from './user-background/high-risk-report/high-risk-report';
import { TypeFrequencyReport } from './user-background/type-frequency-report/type-frequency-report';
import { UnverifiedReport } from './user/unverified-report/unverified-report';

@Component({
  selector: 'app-reportes',
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    TypeFrequencyReport,
    HighRiskReport,
    UnverifiedReport,
    Contractexpiringsoon,
    ContractRevenueByDistrict,
    ContractAverageDurationByLessor,
    ReviewsBelowAverage,
    ReviewLessorRating,
    ReviewNoReviewEstate,
    ReviewRatingDistribution,
  ],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reportes {
  selectedReport = 'type-frequency';

  constructor(private loginService: LoginService) {}

  isAdmin(): boolean {
    return this.loginService.tieneRol('ADMIN');
  }

  isArrendatario(): boolean {
    return this.loginService.tieneRol('ARRENDATARIO');
  }
}
