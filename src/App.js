import logo from './logo.svg';
import logo2 from './logo2.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
	   <img src={logo} className="App-logo" alt="logo" />   
		<img src={logo2} className="App-logo" alt="logo2" />
      
		<p>
		  Klara Lendeczki
		</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         DataOpsAssignment
        </a>
      </header>
    </div>
  );
}

export default App;
