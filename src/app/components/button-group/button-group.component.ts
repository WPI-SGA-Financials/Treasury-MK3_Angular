import { Component, Input, OnInit } from '@angular/core';

export interface IButton {
    name: string;
    routerLink: string;
    matIcon?: string;
}

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.scss'],
})
export class ButtonGroupComponent implements OnInit {
    @Input() buttons: IButton[] = [];

    constructor() {}

    ngOnInit(): void {}
}
