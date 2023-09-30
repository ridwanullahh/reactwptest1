import React, { useEffect, useState } from 'react';
import QuranCard from './QuranCard';
import quranData from './quran.json';

const App = () => {
  const [selectedVerse, setSelectedVerse] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quranData.length);
    setSelectedVerse(quranData[randomIndex]);
  }, []);

  return (
    <div className="App">
      {selectedVerse && <QuranCard verse={selectedVerse} />}
    </div>
  );
};

export default App;