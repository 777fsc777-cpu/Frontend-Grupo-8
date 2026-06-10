import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Estate } from '../../../models/Estate';
import { estateServices } from '../../../services/estateservice';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-estate-list',
  imports: [MatTableModule, DatePipe],
  templateUrl: './estate-list.html',
  styleUrl: './estate-list.css',
})
export class EstateList implements OnInit{
  dataSource:MatTableDataSource<Estate>=new MatTableDataSource()
  displayedColumns: string[]=['c2','c3','c4','c5','c6','c7','c8','c9','c10','c11','c12','c13','c14']

  constructor(private pS:estateServices){}
  ngOnInit():void{
    this.cargarProyecto()
  }

  cargarProyecto(){
    this.pS.list().subscribe({
      next:(data)=>{
        this.dataSource.data=data
      }
    })
  }

}
