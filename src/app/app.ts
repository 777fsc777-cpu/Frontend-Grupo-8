import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('SmartRent_Frontend');

  readonly navItems = [
    { label: 'Menu', route: '/', icon: 'dashboard' },
    { label: 'Usuarios', route: '/users/list', icon: 'group' },
    { label: 'Roles', route: '/roles/list', icon: 'admin_panel_settings' },
    { label: 'Antecedentes', route: '/backgrounds/list', icon: 'badge' },
    { label: 'Inmuebles', route: '/estates/list', icon: 'apartment' },
    { label: 'Contratos', route: '/contracts/list', icon: 'description' },
    { label: 'Notificaciones', route: '/notifications/list', icon: 'notifications' },
    { label: 'Resenas', route: '/reviews/list', icon: 'star' },
    { label: 'Reportes', route: '/risk-reports/list', icon: 'report' },
    { label: 'Puntos de riesgo', route: '/risk-points/list', icon: 'location_on' },
    { label: 'Modelos 3D', route: '/models3d/list', icon: 'view_in_ar' },
  ];
}