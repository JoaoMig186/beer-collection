import axios from 'axios';
import { BeerType } from "../interfaces/BeerType";

const BASE_URL = 'https://62881afb10e93797c156a03a.mockapi.io/api/beer-cellar/beers';

export const getBeers = async () => {
    const response = await axios.get<BeerType[]>(BASE_URL);
    return response.data;
}

export const createBeer = async (beer: BeerType) => {
    const response = await axios.post<BeerType>(BASE_URL, beer);
    return response.data;
}