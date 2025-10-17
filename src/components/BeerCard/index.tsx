import './index.scss';

export default function BeerCard({ name, description, image }: { name: string, description: string, image: string }) {
    return (
        <div className="beer-card">
            <div className="beer-card--texts">
                <p>{name}</p>
                <p>{description}</p>
                <p>IBU</p>
            </div>
            <div className="beer-card--image-container">
                <div className="beer-card--image-container__image">
                    <img src={image} alt="imagem da cerveja" />
                </div>
            </div>
        </div>
    );
}