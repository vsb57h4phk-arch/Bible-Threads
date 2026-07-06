import React, { useState } from 'react';
import { Home } from './screens/Home';
import { Overview } from './screens/Overview';
import { Search } from './screens/Search';
import { Thread } from './screens/Thread';
import { VerseDetail } from './screens/VerseDetail';

export default function App() {
  const [screen, setScreen] = useState({ name: 'home' });
  const goHome = () => setScreen({ name: 'home' });
  const goOverview = id => setScreen({ name: 'overview', id });
  const goThread = (id, idx = 0) => setScreen({ name: 'thread', id, idx });
  const goSearch = () => setScreen({ name: 'search' });
  const goVerse = verse => setScreen({ name: 'verse', verse });
  if (screen.name === 'overview') return <Overview id={screen.id} goHome={goHome} goThread={goThread} />;
  if (screen.name === 'thread') return <Thread id={screen.id} startIndex={screen.idx} goHome={goHome} goOverview={goOverview} />;
  if (screen.name === 'search')
    return <Search goHome={goHome} goThread={goThread} goVerse={goVerse} />;
  if (screen.name === 'verse')
    return <VerseDetail verse={screen.verse} goHome={goHome} goThread={goThread} />;
  return <Home goOverview={goOverview} goThread={goThread} goSearch={goSearch} />;
}
