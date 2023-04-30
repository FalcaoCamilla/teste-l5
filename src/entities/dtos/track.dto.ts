import { Image } from "../image";
import { ArtistDto } from "./artist.dto";

export class TrackDto{
  artist!: ArtistDto;
  duration!: string;
  image!: Image;
  listeners!: string;
  name!: string;
  playcount!: string;
  url!: string
}