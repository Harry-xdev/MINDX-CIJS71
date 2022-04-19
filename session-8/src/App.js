import './App.css';
import { ScrollButton } from './components/BackToTop/backtotop';
import { MainPage } from './components/MainPage/main';
import { useEffect, useState } from 'react'
import { WordsCounting } from './components/LetterCounting/counting';

function App() {

  const [visible, setVisible] = useState(false)


  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrolled = document.documentElement.scrollTop
      console.log(scrolled)

      if (scrolled > 0) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
    
  }, [])

  return (
    <div className="App">
      <MainPage />
      {visible && <ScrollButton />}
      <WordsCounting />
    </div>
  );
}

export default App;
