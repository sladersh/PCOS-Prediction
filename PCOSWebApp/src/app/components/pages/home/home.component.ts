import { Component } from '@angular/core';
import { imageList } from 'src/app/config/app-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  images = imageList;
}
