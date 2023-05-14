import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dropdown } from 'src/app/models/dropdown';

@Component({
  selector: 'app-periods-tracker',
  templateUrl: './periods-tracker.component.html',
  styleUrls: ['./periods-tracker.component.scss'],
})
export class PeriodsTrackerComponent {
  expectedStartDate!: Date;
  menstrualCycleForm: FormGroup = this.fb.group({
    lastPeriodStartDate: ['', Validators.required],
    cycleLength: ['', Validators.required],
  });
  dropdownValues: Dropdown[] = [
    { text: 'Select an option', value: '' },
    { text: '28', value: '28' },
    { text: '29', value: '29' },
    { text: '30', value: '30' },
    { text: '31', value: '31' },
    { text: '32', value: '32' },
    { text: '33', value: '33' },
    { text: '34', value: '34' },
    { text: '35', value: '35' },
    { text: '36', value: '36' },
    { text: '37', value: '37' },
    { text: '38', value: '38' },
    { text: '39', value: '39' },
    { text: '40', value: '40' },
    { text: '41', value: '41' },
    { text: '42', value: '42' },
    { text: '43', value: '43' },
    { text: '44', value: '44' },
    { text: '45', value: '45' },
  ];
  today: string = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  checkDate() {
    let lastPeriodStartDate = new Date(
      this.menstrualCycleForm.value.lastPeriodStartDate
    );
    let cycleLength = this.menstrualCycleForm.value.cycleLength;
    console.log(this.menstrualCycleForm.value.lastPeriodStartDate);
    this.expectedStartDate = new Date(
      lastPeriodStartDate.getTime() + cycleLength * 24 * 60 * 60 * 1000
    );
  }
}
