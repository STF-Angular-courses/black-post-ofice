import { Injectable } from '@angular/core';
import PackageItemModel from '../../../models/package-item.model';
import PostItemModel from '../../../models/post-item.model';

@Injectable({
  providedIn: 'root'
})
export class PackageServiceService {
  packagesList: Array<PackageItemModel> = [
    {
      id: '5df6a9b31205a9b9d47974ba',
      type: 'package',
      thickness: 693,
      width: 340,
      height: 659,
      weight: 431,
      addressFrom: '185 Green Street, Tetherow, Colorado, 6563',
      addressTo: '231 Hewes Street, Eagletown, Virginia, 1405',
      picture: 'http://placehold.it/128x128',
      postOffice: 1231
    },
    {
      id: '5df6a9b369a266b28d169e1e',
      type: 'package',
      thickness: 159,
      width: 874,
      height: 116,
      weight: 319,
      addressFrom: '917 Dwight Street, Noblestown, Delaware, 389',
      addressTo: '489 Norman Avenue, Celeryville, Maryland, 1577',
      picture: 'http://placehold.it/128x128',
      postOffice: 1232
    },
    {
      id: '5df6a9b399609167444d3d27',
      type: 'letter',
      thickness: 625,
      width: 455,
      height: 796,
      weight: 798,
      addressFrom: '199 Battery Avenue, Convent, Nevada, 9145',
      addressTo: '744 Wakeman Place, Chamberino, Idaho, 5154',
      picture: 'http://placehold.it/128x128',
      postOffice: 2121
    },
    {
      id: '5df6a9b342c0269da1a1c83c',
      type: 'package',
      thickness: 199,
      width: 941,
      height: 269,
      weight: 232,
      addressFrom: '956 Jewel Street, Albany, Northern Mariana Islands, 7005',
      addressTo: '964 Cleveland Street, Sharon, Arkansas, 3755',
      picture: 'http://placehold.it/128x128',
      postOffice: 2121
    },
    {
      id: '5df6a9b3f1a77b5d0e070740',
      type: 'letter',
      thickness: 854,
      width: 655,
      height: 821,
      weight: 631,
      addressFrom: '205 Amherst Street, Sidman, American Samoa, 1960',
      addressTo: '700 Kosciusko Street, Nescatunga, Marshall Islands, 1510',
      picture: 'http://placehold.it/128x128',
      postOffice: 1643
    },
    {
      id: '5df6a9b37e1288d15c9e36af',
      type: 'letter',
      thickness: 730,
      width: 435,
      height: 354,
      weight: 551,
      addressFrom: '254 Fleet Walk, Lookingglass, Mississippi, 560',
      addressTo: '461 Louisiana Avenue, Fairview, South Dakota, 1666',
      picture: 'http://placehold.it/128x128',
      postOffice: 2121
    },
    {
      id: '5df6a9b3a31f64d4eae9f3fa',
      type: 'package',
      thickness: 106,
      width: 353,
      height: 688,
      weight: 710,
      addressFrom: '319 Canton Court, Cumminsville, New Mexico, 9809',
      addressTo: '246 Johnson Street, Romeville, Tennessee, 455',
      picture: 'http://placehold.it/128x128',
      postOffice: 1231
    },
    {
      id: '5df6a9b348b0bedee24e23a3',
      type: 'package',
      thickness: 292,
      width: 889,
      height: 806,
      weight: 915,
      addressFrom: '861 Sutton Street, Hollymead, Ohio, 6458',
      addressTo: '511 Preston Court, Dyckesville, Vermont, 3800',
      picture: 'http://placehold.it/128x128',
      postOffice: 1232
    },
    {
      id: '5df6a9b32e7e633d392fec9a',
      type: 'package',
      thickness: 994,
      width: 827,
      height: 410,
      weight: 410,
      addressFrom: '388 Stockton Street, Carlton, Palau, 6157',
      addressTo: '296 Cumberland Walk, Southview, Virgin Islands, 895',
      picture: 'http://placehold.it/128x128',
      postOffice: 1643
    },
    {
      id: '5df6a9b39d51f7b3fd1b4664',
      type: 'package',
      thickness: 199,
      width: 426,
      height: 601,
      weight: 643,
      addressFrom: '706 Garnet Street, Troy, Federated States Of Micronesia, 2432',
      addressTo: '168 Grafton Street, Homeworth, Texas, 6730',
      picture: 'http://placehold.it/128x128',
      postOffice: 1643
    }
  ];

  addPackage(): void {
    this.packagesList.push({
      id: '5df6a9b342c0269da1a1c83c',
      type: 'package',
      thickness: Math.floor(Math.random() * (200) + 100),
      width: Math.floor(Math.random() * (630) + 100),
      height: Math.floor(Math.random() * (230) + 50),
      weight: Math.floor(Math.random() * (700) + 100),
      addressFrom: '956 Jewel Street, Albany, Northern Mariana Islands, 7005',
      addressTo: '964 Cleveland Street, Sharon, Arkansas, 3755',
      picture: 'http://placehold.it/128x128',
      postOffice: Math.floor(Math.random() * (1000) + 100)
    });
  }
  addLetter(): void {
    this.packagesList.push({
      id: '5df6a9b342c0269da1a1c83c',
      type: 'letter',
      thickness: Math.floor(Math.random() * (200) + 100),
      width: Math.floor(Math.random() * (630) + 100),
      height: Math.floor(Math.random() * (230) + 50),
      weight: Math.floor(Math.random() * (700) + 100),
      addressFrom: '956 Jewel Street, Albany, Northern Mariana Islands, 7005',
      addressTo: '964 Cleveland Street, Sharon, Arkansas, 3755',
      picture: 'http://placehold.it/128x128',
      postOffice: Math.floor(Math.random() * (1000) + 100)
    });
  }

  getPackagesByPost(id: number) {
    return this.packagesList.filter(item => item.postOffice === id);
  }
}
