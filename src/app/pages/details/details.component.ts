import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, forkJoin, map } from 'rxjs';

//Services
import { LastfmApiService } from 'src/app/services/lastfm-api.service';

//Models
import { Artist } from 'src/entities/artist';
import { Track } from 'src/entities/track';
import { Album } from 'src/entities/album';

//Utils
import { SweetAlert } from 'src/util/sweetalert';
@Injectable()

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: any;
  paramsSubscription: Subscription | undefined;

  isArtistDetails = false;
  detailsType: string = '';
  
  artists: Artist[];
  tracks: Track[];
  albums: Album[][];

  deafultImage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sweetAlert: SweetAlert,
    private lastfmApiService: LastfmApiService,
  ) {
    this.artists = [];
    this.albums = [];
    this.tracks = [];
    this.deafultImage = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
  }

  ngOnInit(): void {
    this.subscriptionParams()
    this.getArtists();
  }

  ngOnDestroy() {
    this.paramsSubscription?.unsubscribe();
  }

  subscriptionParams(){
    this.paramsSubscription = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.checkParams(this.id);
    });
    
  }

  checkParams(id: any){
    if (id == '1') {
      this.isArtistDetails = true;
      this.detailsType = 'artists'
    } else {
      this.isArtistDetails = false;
      this.detailsType = 'albums'
      if (id != '2') {
        this.router.navigate(['/home'])
      }
    }
  }

  getArtists(){
    this.lastfmApiService.getTopArtists().subscribe({
      next: (dados) => {
        this.artists = dados;
        this.searchAlbumsByArtist();
      },
      error: (error) => {
        this.sweetAlert.spinnerHide();
        this.sweetAlert.setError(error);
      },
      complete: () => {
        this.sweetAlert.completed('Search for artists completed');
      }
    })
  }

  searchAlbumsByArtist() {
    const artistsNames = this.artists.map(item => item.name);
    const requests = artistsNames.map(name => this.lastfmApiService.getTopAlbumsByArtist(name));
    forkJoin(requests).subscribe({
      next: (dados) => {
        this.albums = dados;
      },
        error: (error) => {
          this.sweetAlert.spinnerHide();
          this.sweetAlert.setError(error);
        },
        complete: () => {
          this.sweetAlert.spinnerHide();
        }
      });
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
