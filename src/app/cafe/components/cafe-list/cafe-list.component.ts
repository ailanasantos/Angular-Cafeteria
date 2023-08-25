import { Component } from '@angular/core';
import { Cafe } from 'src/app/models/cafe.model';
import { CafeService } from 'src/app/services/cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent {


  tableColumns: string[] = ['id-column', 'sabor-column', 'quantidade-column', 'temperatura-column'];
  cafes: Cafe[] = [];

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe(data => {
      this.cafes = data;
    });
  }
}
