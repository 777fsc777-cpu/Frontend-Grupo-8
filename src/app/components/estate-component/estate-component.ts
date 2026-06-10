import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { EstateList } from './estate-list/estate-list';

@Component({
  selector: 'app-estate-component',
  imports: [RouterOutlet, EstateList],
  templateUrl: './estate-component.html',
  styleUrl: './estate-component.css',
})
export class EstateComponent {
  constructor(public route:ActivatedRoute){}
}
