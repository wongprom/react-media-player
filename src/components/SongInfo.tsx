import { ReactElement } from 'react';

interface ISongInfoProps {
  artist: string;
  title: string;
}

export const SongInfo = ({ artist, title }: ISongInfoProps): ReactElement => {
  return (
    <div className="active-song-info">
      <div>
        <span className="material-symbols-outlined">more_vert</span>
      </div>
      <div>
        <p>{artist}</p>
        <p>{title}</p>
      </div>
      <div>
        <span className="material-symbols-outlined">more_vert</span>
      </div>
    </div>
  );
};
