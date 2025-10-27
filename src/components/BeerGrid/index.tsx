//React
import React, { useState } from 'react';

//Components
import BeerGridItem from '../BeerGridItem';

//Libs

//Styles
import './index.scss';

//Utils
import mock from '../../mock';
import { useBeerStore, BeerType } from '../../index';

export default function BeerGrid() {
    const [beersMock, setBeersMock] = useState<BeerType[]>(mock as unknown as BeerType[]);

    const { beers, loading, error } = useBeerStore();

    return (
        <section className="beer-grid-page"> 
            <h2>Encontre sua cerveja preferida</h2>
            <div className="beer-grid">
                {beersMock.map((beer) => (
                    <BeerGridItem key={beer.id} beer={beer} />    
                ))}
            </div>
        </section>
    )
}