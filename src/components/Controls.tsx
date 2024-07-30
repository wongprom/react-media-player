import './Controls.css';

export const Controls = () => {
  return (
    <div className="controls">
      <div>
        <span className="material-symbols-outlined">repeat</span>
      </div>
      <div className="center-controls">
        <span className="material-symbols-outlined">fast_rewind</span>
        <span className="material-symbols-outlined">play_circle</span>
        <span className="material-symbols-outlined">fast_forward</span>
      </div>
      <div>
        <span className="material-symbols-outlined">shuffle</span>
      </div>
    </div>
  );
};
