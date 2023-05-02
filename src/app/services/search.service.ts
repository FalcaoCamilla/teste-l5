import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

//Models
import { AlbumsResponse } from 'src/entities/albums-response';
import { ArtistResponse } from 'src/entities/artists-response';

//Environment
import { environment } from 'src/environments/environment';

const baseUrl = 'http://ws.audioscrobbler.com/2.0/';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getArtist(artist: string){
    return this.http.get<ArtistResponse>(
      `${baseUrl}?method=artist.search&artist=${artist}&api_key=${environment.apiKey}&format=json`
    ).pipe(map((response) => response.results.artistmatches.artist));
  }

  getAlbum(album: string){
    return this.http.get<AlbumsResponse>(
      `${baseUrl}?method=album.search&album=${album}&api_key=${environment.apiKey}&format=json`
    ).pipe(map((response) => response.results.albummatches.album));
  }
}
