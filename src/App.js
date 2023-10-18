//import logo from './logo.svg';
import './App.css';
import Hey from './components/hey';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Hey name ="Erin" superhero="Birthday Girl"/>
      <Welcome/>
    </div>
  );
}

export default App;
