'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BeerCard from '../BeerCard';
import './index.scss';
import axios from 'axios';
import mock from '../../mock';

export interface BeerType {
    id: string;
    name: string;
    description: string;
    image: string;
    rating: number;
    type: string;
    liters: number;
    price: number;
}

export default function BeerList() {
    const [beers, setBeers] = useState<BeerType[]>([mock as unknown as BeerType]);
    const [pageIndex, setPageIndex] = useState(0);

    const beerListRef = useRef<HTMLDivElement>(null);

    const backgroundColors = [
    "#FF0000", // Dark Red
    "#006400", // Dark Green
    "#0000FF", // Dark Blue
    "#ffbb00ff", // Dark Goldenrod
    "#8B008B", // Dark Magenta
    "#008B8B"  // Dark Cyan
];

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

    const handleScroll = () => {
        if (beerListRef.current) {
            const scrollLeft = beerListRef.current.scrollLeft;
            const width = beerListRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setPageIndex(index);
        }
    };

    const handleLeftClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (beerListRef.current) {
            const width = beerListRef.current.offsetWidth;
            beerListRef.current.scrollLeft -= width;
            handleScroll();
        }
    }

    const handleRightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (beerListRef.current) {
            const width = beerListRef.current.offsetWidth;
            beerListRef.current.scrollLeft += width;
            handleScroll();
        }
    }

    return (
        <section 
                className="beer-list" ref={beerListRef}
                onScroll={handleScroll}
                style={{
                    backgroundColor: backgroundColors[pageIndex % backgroundColors.length],
                    transition: 'background-color 0.5s ease'
                }}>
            <div className="beer-list--arrow">
                <button className="beer-list--arrow__left" onClick={handleLeftClick}>
                    <FaChevronLeft />
                </button>
                <button className="beer-list--arrow__right" onClick={handleRightClick}>
                    <FaChevronRight />
                </button>
            </div>
            {beers[0].map((beer) => (
                <BeerCard key={beer.id} id={beer.id} name={beer.name} description={beer.description} image={beer.image} rating={beer.rating} />
            ))}
        </section>
    );
}