import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from '../../../models/User';
import { Userservice } from '../../../services/userservice';

@Component({
  selector: 'app-component-list',
  imports: [MatTableModule, DatePipe],
  templateUrl: './component-list.html',
  styleUrl: './component-list.css',
})
export class ComponentList implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'];

  constructor(private uS: Userservice) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.uS.list().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
