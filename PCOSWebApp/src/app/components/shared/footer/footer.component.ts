import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year: string = '';

  ngOnInit() {
    this.year = new Date().getFullYear().toString();
  }
}
