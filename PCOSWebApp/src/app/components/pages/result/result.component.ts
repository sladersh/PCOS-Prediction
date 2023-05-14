import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { imageList } from 'src/app/config/app-config';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  images = imageList;

  constructor(private router: Router, public sharedService: SharedService) {}

  ngOnInit() {}

  checkAgain() {
    this.router.navigateByUrl('/predict');
  }
}
