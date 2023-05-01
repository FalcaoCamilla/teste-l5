import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    private elementRef: ElementRef
    ) { }

  ngOnInit(): void {
  }

  goToAlbumsSection() {
    this.router.navigate(['/details'], { fragment: 'albums-section' });
  }

}
