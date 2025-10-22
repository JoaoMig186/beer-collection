import './index.scss';
import { FaWineBottle } from "react-icons/fa";
import { GiSodaCan } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";

export default function BeerCard({ id, name, description, image, rating, type, liters, price }: { id: string, name: string, description: string, image: string, rating: number, type: string, liters: number, price: number }) {
    
    const enumRatings: { [key: number]: string } = {
        0: 'o o o o o',
        1: '🍺 o o o o',
        2: '🍺🍺 o o o',
        3: '🍺🍺🍺 o o',
        4: '🍺🍺🍺🍺 o',
        5: '🍺🍺🍺🍺🍺',
    }

    const enumType: Record<string, React.ReactNode> = {
        garrafa: <FaWineBottle size={20} />,
        lata: <GiSodaCan />,
    };

    return (
        <div className="beer-card">
            <div className="beer-card--id">
                {id}
            </div>
            <div className="beer-card--texts">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="beer-card--texts__info">
                    {enumType[type] ? enumType[type] : <FaQuestion size={20} />} | {liters}L | {price}€
                </div>   
            </div>
            <div className="beer-card--image-container">
                <div className="beer-card--image-container__image">
                    <img src={image} alt="imagem da cerveja" />
                </div>
                
                <div className="beer-card--image-container__ratings">
                    <span className="beer-card--image-container__ratings--title">Avaliação: </span>
                    <span>{rating > 0 && rating}</span>
                    {enumRatings[rating]}
                </div>
            </div>
        </div>
    );
}