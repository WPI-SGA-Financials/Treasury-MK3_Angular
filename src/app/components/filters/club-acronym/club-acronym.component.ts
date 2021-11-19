import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-club-acronym',
  templateUrl: './club-acronym.component.html',
  styleUrls: ['./club-acronym.component.scss']
})
export class ClubAcronymFilterComponent implements OnInit {
  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
