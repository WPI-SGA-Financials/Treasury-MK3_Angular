import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  opened = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
