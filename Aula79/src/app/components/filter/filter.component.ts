import { Component, EventEmitter, Output } from '@angular/core';
import { FilterOptionsInterface } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
  filterOptions: FilterOptionsInterface = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,

  };

  statusList = [
    { description: 'Ativo', value: true },
    { description: 'Inativo', value: false }
  ];

  @Output('onFilter') onfilterEmitt = new EventEmitter<FilterOptionsInterface>();
  onFilter() {
    this.onfilterEmitt.emit(this.filterOptions);
  }
}
