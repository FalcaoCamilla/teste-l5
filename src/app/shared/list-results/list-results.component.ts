import { Component, Input, OnInit } from '@angular/core';

import { Album } from 'src/entities/album';
import { Artist } from 'src/entities/artist';

@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.scss']
})
export class ListResultsComponent implements OnInit {

  result: (Artist | Album)[] = [];
  searchKey: string = ''

  deafultImage: string;

  @Input() set resultsList(resultsList: (Artist | Album)[]) {
    this.result = resultsList;
  }
  @Input() set key(key: string) {
    this.searchKey = key;
  }

  constructor() {
    this.deafultImage = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
  }

  ngOnInit(): void {
    console.log(this.result)
  }

  getImage(item: any): string {
    if (item.image && Array.isArray(item.image) && item.image.length > 0) {
      return item.image[1]['#text'];
    } else {
      return this.deafultImage
    }
  }

  redirectToUrl(url: string){
    window.open(url, '_blank')
  }

}
