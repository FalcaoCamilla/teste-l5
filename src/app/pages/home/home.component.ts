import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

//Services
import { LastfmApiService } from 'src/app/services/lastfm-api.service';

//Models
import { Track } from 'src/entities/track';
import { Artist } from 'src/entities/artist';

//Useful
import { SweetAlert } from 'src/util/sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artists: Artist[];
  tracks: Array<Track>;

  deafultImage: string;

  constructor(
    private lastfmApiService: LastfmApiService,
    public sweetAlert: SweetAlert
  ) {
    this.artists = [];
    this.tracks = [];
    this.deafultImage = 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'
  }

  ngOnInit(): void {
    this.getTracks()
  }

  getTracks(){
    this.lastfmApiService.getTopTracks().subscribe({
      next: (dados) => {
        this.tracks = dados;
      },
      error: (error) => {
        this.sweetAlert.spinnerHide();
        this.sweetAlert.setError(error);
      },
      complete: () => {
        this.sweetAlert.completed('Top tracks');
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
