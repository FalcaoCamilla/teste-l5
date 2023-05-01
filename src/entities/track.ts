import { Artist } from "./artist";
import { Image } from "./image";

export interface Track {
  name: string;
  duration: string;
  listeners: string;
  image: Image;
  artist: Artist;
}