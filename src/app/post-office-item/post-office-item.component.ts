import {Component, Input} from '@angular/core';
import PostItemModel from '../../models/post-item.model';
import PackageItemModel from '../../models/package-item.model';

@Component({
  selector: 'app-post-office-item',
  templateUrl: './post-office-item.component.html',
  styleUrls: ['./post-office-item.component.less']
})
export class PostOfficeItemComponent  {
  @Input() office: PostItemModel;
  @Input() getPackagesByPost: Array<PackageItemModel>;
  constructor() {
    console.log(this.getPackagesByPost);
  }
}
