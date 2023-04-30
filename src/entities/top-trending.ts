import { ArtistDto } from "./dtos/artist.dto";
import { TrackDto } from "./dtos/track.dto";

export class TopTrending{
  artists!: ArtistDto[];
  tracks!: TrackDto[];
}