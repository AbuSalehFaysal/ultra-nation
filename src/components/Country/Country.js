import React from 'react';

const Country = (props) => {
    const {name, population, flag, region}= props.country;
    const flagStyle = {height: '80px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    console.log(props);
    return (
        <div style={countryStyle}>
            <img style={flagStyle} src={flag} alt=""/>
            <h1>Name: {name}</h1>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <button onClick={ () => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;