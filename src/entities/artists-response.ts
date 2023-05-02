import { Artist } from "./artist";

export interface ArtistResponse {
  artists: {
    artist: Artist[];
  };
  results: {
    artistmatches: {
      artist: Artist[]
    }
  }
}
