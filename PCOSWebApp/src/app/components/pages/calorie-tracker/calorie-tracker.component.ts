import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.scss'],
})
export class CalorieTrackerComponent {
  bmr: number = 0;
  calorieForm: FormGroup = this.fb.group({
    age: ['25', [Validators.required, Validators.min(15), Validators.max(80)]],
    height: [
      '150',
      [Validators.required, Validators.min(40), Validators.max(220)],
    ],
    weight: [
      '60',
      [Validators.required, Validators.min(30), Validators.max(180)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  checkBmr() {
    this.bmr =
      10 * this.calorieForm.value.weight +
      6.25 * this.calorieForm.value.height -
      5 * this.calorieForm.value.age -
      161;
  }
}
