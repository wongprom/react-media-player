import './App.css';
import { Header, Playlist } from './components';
import { songs } from './data';

export function App() {
  return (
    <>
      <Header />
      <main>
        <section className="song-list">
          <Playlist songs={songs} />
        </section>
        <section className="music-player"></section>
      </main>
    </>
  );
}
