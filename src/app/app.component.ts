import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'black-post-office';
  officeVisible = true;
  packagesVisible = false;
  showOffice(): void {
    this.officeVisible = true;
    this.packagesVisible = false;
  }
  showPackage(): void {
    this.officeVisible = false;
    this.packagesVisible = true;
  }
}
