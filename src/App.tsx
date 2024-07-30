import { ActiveSong, Header, Playlist } from './components';
import { songs } from './data';
import './App.css';

export function App() {
  return (
    <>
      <Header />
      <main>
        <section className="song-list">
          <Playlist songs={songs} />
        </section>
        <section className="music-player">
          <ActiveSong activeSong={songs[2]} />
        </section>
      </main>
    </>
  );
}
