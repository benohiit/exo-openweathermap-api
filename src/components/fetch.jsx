import { useState, useEffect } from "react";
import ListRecent from "./list"

const Fetch = ({ toSearch, updateSearch }) => {
  const apiKey = process.env.REACT_APP_API_KEY;   // les variabnles d'environement doivent toujours commencer par "REACT_APP"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${toSearch}&appid=${apiKey}`;
  const [apiData, setState] = useState('');
  const [isRecent, setIsRecent] = useState(false);
  const [listing, setList] = useState([]);

  const handleFromRecent= (newSearch) => {
    updateSearch(newSearch);
  }

  const kelvinToCelsius = (k) => {
    return (k - 273.15).toFixed(0);
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.main) {
          if (listing.some(item => data.name === item.name)) { } else {
            setList([...listing, data])
          }
        }
        setState(data);
      });
  }, [apiUrl]);

  useEffect(() => {
    setIsRecent(true);
    console.log(listing);
  }, [listing]);

  return (
    <div className="App">

      <div className="container">

        <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
          {apiData.main ? (
            <div class="card-body text-center">

              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{' '}
                <strong>{apiData.name} ({apiData.sys.country})</strong>
              </p>
              <p className="h1">
                {kelvinToCelsius(apiData.main.temp)}&deg; C
              </p>
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />


              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i className="fas fa-temperature-low "></i>{' '}
                    <strong>
                      min: {kelvinToCelsius(apiData.main.temp_min)}&deg; C
                    </strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i>{' '}
                    <strong>
                      max: {kelvinToCelsius(apiData.main.temp_max)}&deg; C
                    </strong>
                  </p>
                </div>

              </div>
            </div>
          ) : (apiData.cod == 404 &&
            <h2 style={{ color: 'red' }}>Write a proper place.</h2>
          )}
        </div>
      </div>
      <footer>
        {isRecent && <ListRecent list={listing} modifySearchFromRecentList={handleFromRecent}/>}
      </footer>
    </div>
  );
}
export default Fetch;