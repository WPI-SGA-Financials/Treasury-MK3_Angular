import { Component, Input, OnInit } from '@angular/core';
import { IFilter } from '../types/filter';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() filter: IFilter = {} as IFilter

  constructor() { }

  ngOnInit(): void {
  }

}
