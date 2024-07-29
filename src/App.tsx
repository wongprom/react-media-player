import Header from './components/Header';
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
