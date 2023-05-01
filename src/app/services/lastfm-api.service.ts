import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Environment
import { environment } from 'src/environments/environment';

//Operators
import { map } from 'rxjs';

//Entities
import { TracksResponse } from 'src/entities/tracks-response';
import { ArtistResponse } from 'src/entities/artists-response';
import { AlbumsResponse } from 'src/entities/albums-response';

const baseUrl = 'http://ws.audioscrobbler.com/2.0/';
@Injectable({
  providedIn: 'root',
})
export class LastfmApiService {
  constructor(private http: HttpClient) {}

  getTopArtists() {
    return this.http.get<ArtistResponse>(
      `${baseUrl}?method=chart.gettopartists&api_key=${environment.apiKey}&limit=5&format=json`
    ).pipe(map((response) => response.artists.artist));
  }

  getTopAlbumsByArtist(artist: any) {
    return this.http.get<AlbumsResponse>(
      `${baseUrl}?method=artist.gettopalbums&artist=${artist}&api_key=${environment.apiKey}&limit=3&format=json`
    ).pipe(map((response) => response.topalbums.album));
  }

  getTopTracks() {
    return this.http
      .get<TracksResponse>(
        `${baseUrl}?method=chart.gettoptracks&api_key=${environment.apiKey}&limit=5&format=json`
      )
      .pipe(map((response) => response.tracks.track));
  }
}
