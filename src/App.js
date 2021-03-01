import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Collection from './components/Collection/Collection';

function App() {
  const [countries, setCountries] = useState([]);
  const [collection, setCollection] = useState([]);
  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      console.log(data);
      const names = data.map(country => country.name);
      console.log(names);
    })
    .catch(error => console.error())
  }, [])
  const handleAddCountry = (country) => {
    const newCollection = [...collection, country];
    setCollection(newCollection);
  }
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h1>Country Added: {collection.length}</h1>
      <Collection collection={collection}></Collection>
      <ul>
        {
          countries.map( country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
