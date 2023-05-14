import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dropdown } from 'src/app/models/dropdown';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss'],
})
export class PredictComponent {
  pcosForm: FormGroup = this.fb.group({
    cycle: ['', Validators.required],
    weightGain: ['', Validators.required],
    hairGrowth: ['', Validators.required],
    skinDarkening: ['', Validators.required],
    follicleL: ['0', Validators.required],
    follicleR: ['0', Validators.required],
  });
  submitted: boolean = false;
  dropdownValues: Dropdown[] = [
    { text: 'Select an option', value: '' },
    { text: 'No', value: 'N' },
    { text: 'Yes', value: 'Y' },
  ];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {}

  predictPcos() {
    this.submitted = true;
    if (this.pcosForm.valid) {
      this.apiService.postRFPrediction(this.pcosForm.value).subscribe({
        next: (response) => {
          this.sharedService.prediction = response.prediction;
          this.router.navigateByUrl('/result');
        },
        error: (error) => console.error(error),
      });
    }
  }
}
