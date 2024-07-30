import './Controls.css';

export const Controls = () => {
  return (
    <div className="controls">
      <div>
        <span className="material-symbols-outlined font-size-30">repeat</span>
      </div>
      <div className="center-controls">
        <span className="material-symbols-outlined font-size-50">
          fast_rewind
        </span>
        <span className="material-symbols-outlined play_circle font-size-70">
          play_circle
        </span>
        <span className="material-symbols-outlined font-size-50">
          fast_forward
        </span>
      </div>
      <div>
        <span className="material-symbols-outlined font-size-30">shuffle</span>
      </div>
    </div>
  );
};
