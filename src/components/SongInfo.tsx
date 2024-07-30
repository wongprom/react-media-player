import { ReactElement } from 'react';

interface ISongInfoProps {
  artist: string;
  title: string;
}

export const SongInfo = ({ artist, title }: ISongInfoProps): ReactElement => {
  return (
    <div className="active-song-info">
      <div>
        <span className="material-symbols-outlined font-size-30">
          add_circle
        </span>
      </div>
      <div className="active-album-info">
        <p className="artist">{artist}</p>
        <p className="title">{title}</p>
      </div>
      <div>
        <span className="material-symbols-outlined font-size-30">favorite</span>
      </div>
    </div>
  );
};
