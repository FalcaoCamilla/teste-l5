import { Album } from "./album";

export interface AlbumsResponse {
  topalbums: {
    album: Album[];
  };
}
