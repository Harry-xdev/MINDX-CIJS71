import { InputSection } from './components/InputBar/input';
import './App.css';
import { TaskBar } from './components/TaskBar/taskbar';
import { StatusBar } from './components/StatusBar/statusbar';

function App(props) {
  return (
    <div className="App">
      <InputSection />
      {/* <TaskBar task='Clean up bedroom' /> */}
      {/* <TaskBar task='Buy some milk' />
      <TaskBar task='Jogging' />
      <TaskBar task='Lean React' />
      <TaskBar task='Doing Exercises' /> */}
      <TaskBar />
      <StatusBar />
    </div>
  );
}

export default App;
