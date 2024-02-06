import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/progressbar';

function App() {
  return (
    <div className='App'>
        <span>Progress Bar</span>
        <ProgressBar value={2} />
    </div>
  );
}

export default App;
