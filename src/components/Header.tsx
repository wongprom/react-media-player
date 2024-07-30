import { ReactElement } from 'react';
import './Header.css';

export const Header = (): ReactElement => {
  return (
    <header>
      <span className="material-symbols-outlined font-size-30">
        chevron_left
      </span>
      <p>Playlist - Moody</p>
      <span className="material-symbols-outlined font-size-30">more_vert</span>
    </header>
  );
};
