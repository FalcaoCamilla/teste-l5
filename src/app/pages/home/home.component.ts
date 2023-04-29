import { Component, OnInit } from '@angular/core';

//Services
import { LastfmApiService } from 'src/app/services/lastfm-api.service';

//Useful
import { SweetAlert } from 'src/util/sweetalert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private lastfmApiService: LastfmApiService,
    public sweetAlert: SweetAlert
  ) { }

  ngOnInit(): void {
    this.getTrending()
  }

  getTrending(){
    this.sweetAlert.spinnerShow("Buscando trending...")
    this.lastfmApiService.getTopArtists().subscribe({
      next: (dados) => {
        console.log(dados);
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

}
