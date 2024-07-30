import { ReactElement } from 'react';
import { ISong } from '../interfaces';
import './Playlist.css';

interface PlalistProps {
  songs: ISong[];
}

export const Playlist = ({ songs }: PlalistProps): ReactElement => {
  return (
    <ul>
      {songs.map((song) => (
        <li className="song" key={song.id}>
          <div className="image-wrapper">
            <img src={song.image} alt="" />
          </div>
          <div className="info">
            <p>artist: {song.artist}</p>
            <p>title: {song.title}</p>
          </div>
          <div className="icon-wrapper">
            <span className="material-symbols-outlined">more_vert</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
