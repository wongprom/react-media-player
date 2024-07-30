import { ReactElement } from 'react';
import { ISong } from '../interfaces';
import './Song.css';

interface SongProps {
  song: ISong;
}

export const Song = ({ song }: SongProps): ReactElement => {
  return (
    <li className="song" key={song.id}>
      <div className="image-wrapper">
        <img src={song.image} alt="" />
      </div>
      <div className="info">
        <p className="artist">{song.artist}</p>
        <p className="title">{song.title}</p>
      </div>
      <div className="icon-wrapper">
        <span className="material-symbols-outlined">more_vert</span>
      </div>
    </li>
  );
};
