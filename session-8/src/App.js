import './App.css';
import { ScrollButton } from './components/BackToTop/backtotop';
import { MainPage } from './components/MainPage/main';
import { useEffect, useState } from 'react'

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
    </div>
  );
}

export default App;
