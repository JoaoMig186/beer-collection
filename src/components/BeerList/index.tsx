'use client';

import { useState, useEffect } from 'react';
import BeerCard from '../BeerCard';
import './index.scss';
import axios from 'axios';
import mock from '../../mock';

export interface BeerType {
    id: string;
    name: string;
    description: string;
    image: string;
}

export default function BeerList() {
    const [beers, setBeers] = useState<BeerType[]>([mock as unknown as BeerType]);

    const getBeers = async () => {
        axios({
            method: 'get',
            url: 'https://62881afb10e93797c156a03a.mockapi.io/api/beer-cellar/beers',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setBeers(response.data);
        })
    }

    useEffect(() => {
        console.log("beers", beers);
        //getBeers();
    }, []);

    return (
        <section className="beer-list">
            {beers[0].map((beer) => (
                <BeerCard key={beer.id} name={beer.name} description={beer.description} image={beer.image}  />
            ))}
        </section>
    );
}