import logo from './logo.svg';
import './App.css';
import Search from './components/search';
import FetchAPI from './components/fetch';
import { useState } from 'react';

function App() {

  const [country, setCountry] = useState('');

  const handleCallback = (childData) => {
    setCountry(childData);
  }

  return (
    <div className="App">
      <header className="App-header d-flex justify-content-center align-items-center">
            <h2>React Weather App</h2>
      
        <Search callBack={handleCallback} />
        <FetchAPI toSearch={country}/>
      </header>
    </div>
  );
}

export default App;
