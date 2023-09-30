import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactPlayer from 'react-player';

const QuranCard = ({ verse }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCopy = () => {
    alert('Verse copied to clipboard!');
  };

  return (
    <div className="quran-card">
      <div className="quran-text">{verse.verses[0].text}</div>
      <div className="transliteration">{verse.transliteration}:{verse.verses[0].id}</div>
      <ReactPlayer
        url={verse.audiourl}
        playing={isPlaying}
        hidden
        controls={false}
        width="0"
        height="0"
      />
      <div className="controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <CopyToClipboard text={verse.text} onCopy={handleCopy}>
          <button>Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default QuranCard;
