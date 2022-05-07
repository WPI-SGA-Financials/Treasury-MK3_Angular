import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveClubPipe } from './active-club/active-club.pipe';
import { TypeOfPipe } from './type-of/type-of.pipe';

@NgModule({
    declarations: [ActiveClubPipe, TypeOfPipe],
    exports: [ActiveClubPipe, TypeOfPipe],
    imports: [CommonModule],
})
export class SharedPipesModule {}
