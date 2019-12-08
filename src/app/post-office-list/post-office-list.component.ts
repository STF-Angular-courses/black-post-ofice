import {Component} from '@angular/core';
import PostItem from '../../models/PostItem';

@Component({
  selector: 'app-post-office-list',
  templateUrl: './post-office-list.component.html',
  styleUrls: ['./post-office-list.component.less']
})
export class PostOfficeListComponent {
  officesList: Array<PostItem> = [
    {
      name: 'First one',
      numberOfPeople: 25,
      chiefName: 'Anna Smith'
    },
    {
      name: 'Something old',
      numberOfPeople: 40,
      chiefName: 'John Bow'
    },
    {
      name: 'First from end',
      numberOfPeople: 125,
      chiefName: 'Anna Gold'
    }, {
      name: 'Home',
      numberOfPeople: 250,
      chiefName: 'James Bond'
    },
  ];
}
