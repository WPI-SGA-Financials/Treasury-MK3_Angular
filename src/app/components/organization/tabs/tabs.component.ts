import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() orgName: string = '';

  constructor() {}

  ngOnInit(): void {}
}
