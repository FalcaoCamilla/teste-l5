import { Artist } from './artist';
import { Image } from './image';

export interface Album {
  name: string;
  playcount: number;
  url: string;
  artist: Artist;
  image: Image;
}
