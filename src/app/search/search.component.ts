import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SearchFilterComponent } from '../search-filter/search-filter.component';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchFilterComponent, SearchResultsComponent, MatDividerModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  filter: string | null = '';
  searchTerm: string | null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access dynamic parameter and query parameter
    this.route.params.subscribe((params) => {
      this.filter = params['filter'];
    });

    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['q'];
    });
  }
}
