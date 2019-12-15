import { Component } from '@angular/core';
import {PackageServiceService} from '../common/services/package-service.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.less']
})
export class PackageListComponent {
  constructor(private packageService: PackageServiceService) { }
}
