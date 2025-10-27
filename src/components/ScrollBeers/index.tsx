import React from 'react';

import './styles.scss';
import { BeerType } from '@/interfaces/BeerType';

export default function ScrollBeers({ beers }: { beers: BeerType[] }) {

    return (
        <div className="scroll-beers">
            <div className="scroll-beers--group">
                {beers.map((beer, index) => {
                    return (
                        <div className="scroll-beers--group__item" key={index}>
                            <img src={beer.image} alt={beer.name} />
                        </div>
                    )
                })}
            </div>
            <div aria-hidden="true" className="scroll-beers--group">
                {beers.map((beer, index) => {
                    return (
                        <div className="scroll-beers--group__item" key={index}>
                            <img src={beer.image} alt={beer.name} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}