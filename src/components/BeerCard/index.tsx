import './index.scss';

export default function BeerCard({ id, name, description, image, rating }: { id: string, name: string, description: string, image: string, rating: number }) {
    
    const enumRatings: { [key: number]: string } = {
        1: '🍺 o o o o',
        2: '🍺🍺 o o o',
        3: '🍺🍺🍺 o o',
        4: '🍺🍺🍺🍺 o',
        5: '🍺🍺🍺🍺🍺',
    }

    return (
        <div className="beer-card">
            <div className="beer-card--id">
                {id}
            </div>
            <div className="beer-card--texts">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>IBU</p>
            </div>
            <div className="beer-card--image-container">
                <div className="beer-card--image-container__image">
                    <img src={image} alt="imagem da cerveja" />
                </div>
                <div className="beer-card--image-container__ratings">
                    {enumRatings[rating]}
                </div>
            </div>
        </div>
    );
}