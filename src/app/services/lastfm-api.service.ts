import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = 'http://ws.audioscrobbler.com/2.0/';

@Injectable({
  providedIn: 'root'
})
export class LastfmApiService {

  constructor(private http: HttpClient) { }

  getTopArtists(){
    return this.http.get(`${baseUrl}?method=chart.gettopartists&api_key=${environment.apiKey}&format=json`)
  }

  getTopTracks(){
    return this.http.get(`${baseUrl}?method=chart.gettoptracks&api_key=${environment.apiKey}&format=json`)
  }
}
