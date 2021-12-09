import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFilter } from '../types/filter';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() filter: IFilter = {} as IFilter;

  @Output() removeFilter: EventEmitter<IFilter> = new EventEmitter<IFilter>();

  constructor() {}

  handleRemove() {
    this.removeFilter.emit(this.filter);
  }
}
