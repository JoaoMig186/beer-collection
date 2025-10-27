//Styles
import "./index.scss";

//Libs
import { FaQuestion } from "react-icons/fa";

//Utils
import { BeerType, enumType } from "../../index";

export default function BeerGridItem({ beer }: { beer: BeerType }) {

    const { id, name, description, image, rating, type, liters, price } = beer;

    return (
        <div className="beer-grid--item">
            <div className="beer-grid--item__image-container">
                <img src={image} alt="imagem da cerveja" />
            </div>
            <div className="beer-grid--item__texts">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="beer-grid--item__texts__info">
                    {enumType[type] ? enumType[type] : <FaQuestion size={20} />} | {liters}L | {price}€
                </div>
            </div>
            <span className="beer-grid--item__details">Ver detalhes</span>
        </div>
    );
}