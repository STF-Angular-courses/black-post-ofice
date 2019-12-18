import { Injectable } from '@angular/core';
import PostItemModel from '../../../models/post-item.model';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  officesList: Array<PostItemModel> = [
    {
      id: 1231,
      name: 'First one',
      numberOfPeople: 25,
      chiefName: 'Anna Smith'
    },
    {
      id: 1232,
      name: 'Something old',
      numberOfPeople: 40,
      chiefName: 'John Bow'
    },
    {
      id: 2121,
      name: 'First from end',
      numberOfPeople: 125,
      chiefName: 'Anna Gold'
    },
    {
      id: 1643,
      name: 'Home',
      numberOfPeople: 250,
      chiefName: 'James Bond'
    },
  ];
  addOffice(): void {
    this.officesList.push({
      id: Date.now(),
      name: 'Home',
      numberOfPeople: Math.floor(Math.random() * (230) + 20),
      chiefName: 'James Bond'
    });
  }
}
