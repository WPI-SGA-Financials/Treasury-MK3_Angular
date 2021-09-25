import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeClub'
})
export class ActiveClubPipe implements PipeTransform {
  transform(value: boolean, ...args: unknown[]): unknown {
    return !value ? 'check_circle' : 'cancel';
  }
}
