import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-club-classification',
  templateUrl: './club-classification.component.html',
  styleUrls: ['./club-classification.component.scss']
})
export class ClubClassificationFilterComponent implements OnInit {
  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
