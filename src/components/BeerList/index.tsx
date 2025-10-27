//React
import React, { useState, useRef } from 'react';

//Components
import ScrollBeers from '../ScrollBeers';
import BeerSlideItem from '../BeerSlideItem';

//Libs
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//Styles
import './index.scss';

//Utils
import mock from '../../mock';
import { useBeerStore, BeerType } from '../../index';

export default function BeerList() {
    const [beersMock, setBeersMock] = useState<BeerType[]>(mock as unknown as BeerType[]);
    const [pageIndex, setPageIndex] = useState(0);
    
    const { beers, loading, error } = useBeerStore();

    const beerListRef = useRef<HTMLDivElement>(null);

    const backgroundColors = [
    "#FF0000", // Dark Red
    "#006400", // Dark Green
    "#0000FF", // Dark Blue
    "#ffbb00ff", // Dark Goldenrod
    "#8B008B", // Dark Magenta
    "#008B8B"  // Dark Cyan
];

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

    if (loading) return <p>Carregando cervejas...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <section 
            className="beer-list" ref={beerListRef}
            onScroll={handleScroll}
            style={{
                backgroundColor: backgroundColors[pageIndex % backgroundColors.length],
                transition: 'background-color 0.5s ease'
            }}>
            <ScrollBeers beers={beersMock} />
            <div className="beer-list--arrow">
                <button className="beer-list--arrow__left" onClick={handleLeftClick}>
                    <FaChevronLeft />
                </button>
                <button className="beer-list--arrow__right" onClick={handleRightClick}>
                    <FaChevronRight />
                </button>
            </div>
            {beersMock.map((beer) => (
                <BeerSlideItem key={beer.id} beer={beer}/>
            ))}
            <div className="beer-list--page-indicator">
                {pageIndex + 1} / {beersMock.length}
            </div>
        </section>
    );
}