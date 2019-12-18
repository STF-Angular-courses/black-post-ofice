import {Component} from '@angular/core';
import {PostsServiceService} from '../common/services/posts-service.service';
import {PackageServiceService} from '../common/services/package-service.service';

@Component({
  selector: 'app-post-office-list',
  templateUrl: './post-office-list.component.html',
  styleUrls: ['./post-office-list.component.less']
})
export class PostOfficeListComponent {
  constructor(
    private postsService: PostsServiceService,
    private packageService: PackageServiceService
  ) {  }
}
