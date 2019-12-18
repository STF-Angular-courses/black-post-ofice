import {Component, Input} from '@angular/core';
import PackageItemModel from '../../models/package-item.model';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.less']
})
export class PackageItemComponent  {
  @Input() package: PackageItemModel;
}
