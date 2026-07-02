import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { LoginService } from '../../services/login-service';
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
}
