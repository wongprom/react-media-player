import { ReactElement } from 'react';
import { ISong } from '../interfaces';
import './ActiveSong.css';
import { Controls, SongInfo, Timeline } from '.';

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
      <SongInfo artist={activeSong.artist} title={activeSong.title} />
      {/* timeline */}
      <Timeline />
      {/* controls */}
      <Controls />
    </div>
  );
};
