import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ArtistDto } from 'src/entities/dtos/artist.dto';
import { TrackDto } from 'src/entities/dtos/track.dto';
import { environment } from 'src/environments/environment';

const baseUrl = 'http://ws.audioscrobbler.com/2.0/';

@Injectable({
  providedIn: 'root'
})
export class LastfmApiService {

  constructor(private http: HttpClient) { }

  getTopArtists(){
    return this.http.get<ArtistDto[]>(`${baseUrl}?method=chart.gettopartists&api_key=${environment.apiKey}&limit=5&format=json`)
  }

  getTopTracks(){
    return this.http.get<TrackDto>(`${baseUrl}?method=chart.gettoptracks&api_key=${environment.apiKey}&limit=5&format=json`)
  }
}
