import React from 'react';

const Collection = (props) => {
    const collection = props.collection;
    let totalPopulation = 0;
    for (let i = 0; i < collection.length; i++) {
        const country = collection[i];
        totalPopulation = totalPopulation + country.population;
    }
    return (
        <div>
            <h1>Collection: {collection.length}</h1>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Collection;