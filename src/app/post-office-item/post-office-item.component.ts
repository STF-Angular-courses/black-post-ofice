import {Component, Input} from '@angular/core';
import PostItem from '../../models/PostItem';

@Component({
  selector: 'app-post-office-item',
  templateUrl: './post-office-item.component.html',
  styleUrls: ['./post-office-item.component.less']
})
export class PostOfficeItemComponent  {
  @Input() office: PostItem;
}
