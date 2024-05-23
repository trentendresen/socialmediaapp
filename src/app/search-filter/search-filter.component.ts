import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [MatDividerModule, MatListModule, MatIconModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.css',
})
export class SearchFilterComponent implements OnInit {
  searchTerm: string | null = '';
  filter: string | null = '';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.filter = params['filter'];
    });
    this.route.queryParams.subscribe((params) => {
      this.searchTerm = params['q'];
    });
  }

  changeFilter = (filter: string) => {
    this.router.navigate(['/search', filter], {
      queryParams: { q: this.searchTerm },
    });
  };
}
