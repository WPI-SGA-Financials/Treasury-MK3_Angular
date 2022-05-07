import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-reusable-header',
    templateUrl: './reusable-header.component.html',
    styleUrls: ['./reusable-header.component.scss'],
})
export class ReusableHeaderComponent {
    @Input() routerPath: string = '';

    @Input() headerTitle: string = '';

    @Input() fromOrgView: boolean = false;

    @Input() dialogRef: MatDialogRef<any> | undefined;

    constructor(private router: Router) {}

    toOrgPage() {
        this.router.navigate([this.routerPath]).then(() => {
            return this.dialogRef?.close();
        });
    }
}
