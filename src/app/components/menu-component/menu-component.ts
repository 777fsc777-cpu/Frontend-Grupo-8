import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-component',
  imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent {}