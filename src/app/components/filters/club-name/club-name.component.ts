import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-club-name',
  templateUrl: './club-name.component.html',
  styleUrls: ['./club-name.component.scss']
})
export class ClubNameFilterComponent implements OnInit {
  formGroup: FormGroup;
  clubName: AbstractControl;

  @Output()
  search: EventEmitter<any> = new EventEmitter<any>();

  constructor(private readonly fb: FormBuilder) {
    this.formGroup = this.fb.group({
      clubName: ['', [Validators.minLength(1)]]
    });

    this.clubName = <AbstractControl>this.formGroup.get('clubName');
  }

  ngOnInit(): void {}


  onSubmit($event: any) {
    $event.preventDefault();

    window.alert(this.clubName?.value)
  }
}
