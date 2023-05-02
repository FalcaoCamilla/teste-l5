import { Component, Input, OnInit } from '@angular/core';

//Services
import { SearchService } from 'src/app/services/search.service';

//Models
import { Album } from 'src/entities/album';
import { Artist } from 'src/entities/artist';
import { Filter } from 'src/entities/filter';

//Util
import { GenericUtil } from 'src/util/generic.utils';
import { SweetAlert } from 'src/util/sweetalert';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isArtist = false;
  isHistoryVisible: boolean = false;
  titleSearch: string = '';
  withoutSearch: string = 'There is no recent research';

  filter: Filter;

  artist: Artist[] = [];
  albums: Album[] = [];
  results: (Artist | Album)[] = [];

  recentSearches: any[] = []

  @Input() set isArtistDetails (isArtistDetails: boolean){
    this.isArtist = isArtistDetails
    this.results = []
    if(this.isArtist){
      this.titleSearch = 'artists'
    } else {
      this.titleSearch = 'albums'
    }
  }

  constructor(
    private apiSearch: SearchService,
    private sweetAlert: SweetAlert,
    private util: GenericUtil
    ) {
      this.filter = new Filter();
      this.results = [];

      this.recentSearches = [];
  }

  ngOnInit(): void {
    this.getRecentSearches();
  }

  addSearchKey(){
    this.recentSearches.push(this.filter);
    if (this.util.isNullOrUndefined(localStorage.getItem('searches'))) {
      localStorage.setItem('searches', JSON.stringify(this.recentSearches));
    } else {
      const searches = JSON.parse(localStorage.getItem('searches') || '[]');
      searches.push(this.filter);
      this.recentSearches = searches
      localStorage.setItem('searches', JSON.stringify(searches));
    }
  }

  getRecentSearches(){
    if(localStorage.getItem("searches")){
      this.recentSearches = JSON.parse(localStorage.getItem("searches") || "[]");
    }
  }

  getInfo() {
    this.addSearchKey();
    if (this.isArtist) {
      this.getArtist();
    } else {
      this.getAlbums();
    }
    this.filter.key = '';
    this.getRecentSearches();
  }
  
  getArtist() {
    this.apiSearch.getArtist(this.filter.key).subscribe({
      next: (dados) => {
        this.artist = dados;
        this.results = this.artist;
      },
      error: (error) => {
        this.sweetAlert.spinnerHide();
        this.sweetAlert.setError(error);
      },
      complete: () => {
        this.sweetAlert.completed('Artists found');
      }
    });
  }

  getAlbums(){
    this.apiSearch.getAlbum(this.filter.key).subscribe({
      next: (dados) => {
        this.albums = dados;
        this.results = this.albums;
      },
      error: (error) => {
        this.sweetAlert.spinnerHide();
        this.sweetAlert.setError(error);
      },
      complete: () => {
        this.sweetAlert.completed('Albums found');
      }
    })
  }

  showDialog(){
    this.isHistoryVisible = true
  }

  clear(item: any){
    const indice = this.recentSearches.indexOf(item);
    this.recentSearches.splice(indice, 1);
    localStorage.setItem('searches', JSON.stringify(this.recentSearches));
    this.getRecentSearches();
  }

  bindSearch(item: any){
    this.filter.key = item
  }
}
