import { ReactElement } from 'react';
import { ISong } from '../interfaces';
import './ActiveSong.css';

interface IActiveSongProps {
  activeSong: ISong;
}

export const ActiveSong = ({ activeSong }: IActiveSongProps): ReactElement => {
  return (
    <>
      {/* album cover */}
      {/* active song info */}
      {/* timeline */}
      {/* controls */}
    </>
  );
};
