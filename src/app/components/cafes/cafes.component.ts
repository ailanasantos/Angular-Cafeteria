import { CafeService } from './../../services/cafe.service';
import { Component,OnInit } from '@angular/core';
import { Cafe } from 'src/app/models/cafe.model';


@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit{

  cafes: Cafe[] = [];

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
      this.cafeService.getCafes().subscribe(data => {
        this.cafes = data;
      })
  }



}

