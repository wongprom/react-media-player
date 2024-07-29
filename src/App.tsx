import { Header } from './components';
import './App.css';

export function App() {
  return (
    <>
      <Header />
      <main>
        <section className="song-list"></section>
        <section className="music-player"></section>
      </main>
    </>
  );
}
