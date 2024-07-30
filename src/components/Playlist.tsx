import { ReactElement } from 'react';
import { Song } from '.';
import { ISong } from '../interfaces';
import './Playlist.css';

interface PlalistProps {
  songs: ISong[];
}

export const Playlist = ({ songs }: PlalistProps): ReactElement => {
  return (
    <ul>
      {songs.map((song) => (
        <Song key={song.id} song={song} />
      ))}
    </ul>
  );
};
