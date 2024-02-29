import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-claims-filters',
  templateUrl: './claims-filters.component.html',
  styleUrls: ['./claims-filters.component.scss']
})
export class ClaimsFiltersComponent implements OnInit {

  checked = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
