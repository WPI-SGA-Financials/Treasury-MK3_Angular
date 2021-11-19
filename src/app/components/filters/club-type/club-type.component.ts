import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-club-type',
  templateUrl: './club-type.component.html',
  styleUrls: ['./club-type.component.scss']
})
export class ClubTypeFilterComponent implements OnInit {
  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
