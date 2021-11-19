import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-club-inactive',
  templateUrl: './club-inactive.component.html',
  styleUrls: ['./club-inactive.component.scss']
})
export class ClubInactiveFilterComponent implements OnInit {
  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
