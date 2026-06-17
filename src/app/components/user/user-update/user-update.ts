import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/User';
import { Userservice } from '../../../services/userservice';

@Component({
  selector: 'app-user-update',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './user-update.html',
  styleUrl: './user-update.css',
})
export class UserUpdate implements OnInit {
  user: User = new User();
  id: number = 0;

  constructor(
    private uS: Userservice,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.uS.listId(this.id).subscribe((data) => {
      this.user = data;
      this.user.password = '';
    });
  }

  aceptar() {
    this.uS.update(this.id, this.user).subscribe(() => {
      this.snackBar.open('Usuario actualizado correctamente', 'Cerrar', { duration: 3000 });
      this.router.navigate(['/users/list']);
    });
  }

  cancelar() {
    this.router.navigate(['/users/list']);
  }
}
