import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

//Services
import { LastfmApiService } from 'src/app/services/lastfm-api.service';
import { ArtistDto } from 'src/entities/dtos/artist.dto';
import { TrackDto } from 'src/entities/dtos/track.dto';
import { TopTrending } from 'src/entities/top-trending';

//Useful
import { SweetAlert } from 'src/util/sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artists: ArtistDto[];
  tracks: TrackDto[];
  topTrending: TopTrending[];

  deafultImage: string;

  constructor(
    private lastfmApiService: LastfmApiService,
    public sweetAlert: SweetAlert
  ) {
    this.artists = [];
    this.tracks = [];
    this.topTrending = [];
    this.deafultImage = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
  }

  ngOnInit(): void {
    this.getTopTrending()
  }

  getTopTrending(){
    let artists = this.lastfmApiService.getTopArtists();
    let tracks = this.lastfmApiService.getTopTracks();

    forkJoin<any[]>([artists, tracks]).subscribe({
      next: (dados) => {
        this.topTrending = dados;
        this.artists = dados[0].artists.artist;
        this.tracks = dados[1].tracks.track;
        console.log(this.tracks)
      },
      error: (error) => {
        this.sweetAlert.spinnerHide();
        this.sweetAlert.setError(error);
      },
      complete: () => {
        this.sweetAlert.completed('Top Trending carregada');
      }
      })
  }

  getImage(item: any): string {
    if (item.image && Array.isArray(item.image) && item.image.length > 0) {
      return item.image[1]['#text'];
    } else {
      return this.deafultImage
    }
  }

}
