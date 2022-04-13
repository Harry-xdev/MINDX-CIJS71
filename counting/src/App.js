import { Count } from './components/count'
import './App.css';
import { Scrolling } from './components/scrolling';
import { useState } from 'react'


function App() {
  const [scrollingVisible, setScrollingVisible] = useState(true)

  return (
    <div className="App">
      <Count />
      <button
        onClick={() => { setScrollingVisible(!scrollingVisible) }}
      >Change scrolling visible</button>
      {scrollingVisible && <Scrolling />}
    </div>
  );
}

export default App;
