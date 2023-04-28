import { Component } from '@angular/core';
import { logoUrl } from 'src/app/config/app-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  logo: string = logoUrl;
}
