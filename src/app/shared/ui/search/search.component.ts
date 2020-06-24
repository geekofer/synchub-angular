import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output()
  searchTerm = new EventEmitter<string>();
  constructor() {}
  searchText = '';

  ngOnInit() {}

  onSearch(event: any): void {
    this.searchTerm.emit(event.target.value.trim());
  }
}
