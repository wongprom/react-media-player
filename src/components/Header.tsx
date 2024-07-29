import { ReactElement } from 'react';
import './Header.css';

export const Header = (): ReactElement => {
  return (
    <header>
      <span className="material-symbols-outlined">chevron_left</span>
      <p>Playlist - Moody</p>
      <span className="material-symbols-outlined">more_vert</span>
    </header>
  );
};
