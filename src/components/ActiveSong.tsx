import { ReactElement } from 'react';
import { ISong } from '../interfaces';
import './ActiveSong.css';

interface IActiveSongProps {
  activeSong: ISong;
}

export const ActiveSong = ({ activeSong }: IActiveSongProps): ReactElement => {
  return (
    <div className="active-song-wrapper">
      {/* album cover */}
      <figure className="image-wrapper">
        <img src={activeSong.image} alt="" />
      </figure>
      {/* active song info */}
      <div className="active-song-info">
        <div>
          <span className="material-symbols-outlined">more_vert</span>
        </div>
        <div>
          <p>{activeSong.artist}</p>
          <p>{activeSong.title}</p>
        </div>
        <div>
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>
      {/* timeline */}
      <div className="timeline">
        <span>0.40</span>
        <div className="bar-wrapper">
          <div className="bar"></div>
        </div>
        <span>4.29</span>
      </div>
      {/* controls */}
      <div className="controls">
        <div>
          <span className="material-symbols-outlined">repeat</span>
        </div>
        <div className="center-controls">
          <span className="material-symbols-outlined">fast_rewind</span>
          <span className="material-symbols-outlined">play_circle</span>
          <span className="material-symbols-outlined">fast_forward</span>
        </div>
        <div>
          <span className="material-symbols-outlined">shuffle</span>
        </div>
      </div>
    </div>
  );
};
