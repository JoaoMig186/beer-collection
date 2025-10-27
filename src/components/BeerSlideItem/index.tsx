//Styles
import './index.scss';

//Libs
import { FaQuestion } from "react-icons/fa";

//Utils
import { BeerType, enumRatings, enumType } from "../../index";

export default function BeerSlideItem({ beer }: { beer: BeerType }) {

    const { id, name, description, image, rating, type, liters, price } = beer;

    return (
        <div className="beer-slide-item">
            <div className="beer-slide-item--id">
                {id}
            </div>
            <div className="beer-slide-item--texts">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="beer-slide-item--texts__info">
                    {enumType[type] ? enumType[type] : <FaQuestion size={20} />} | {liters}L | {price}€
                </div>   
            </div>
            <div className="beer-slide-item--image-container">
                <div className="beer-slide-item--image-container__image">
                    <img src={image} alt="imagem da cerveja" />
                </div>
                
                <div className="beer-slide-item--image-container__ratings">
                    <span className="beer-slide-item--image-container__ratings--title">Avaliação: </span>
                    <span>{rating > 0 && rating}</span>
                    {enumRatings[rating]}
                </div>
            </div>
        </div>
    );
}