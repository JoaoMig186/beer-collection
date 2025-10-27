//Libs
import { FaWineBottle } from "react-icons/fa";
import { GiSodaCan } from "react-icons/gi";

const enumRatings: { [key: number]: string } = {
    0: 'o o o o o',
    1: '🍺 o o o o',
    2: '🍺🍺 o o o',
    3: '🍺🍺🍺 o o',
    4: '🍺🍺🍺🍺 o',
    5: '🍺🍺🍺🍺🍺',
};

const enumType: Record<string, React.ReactNode> = {
    garrafa: <FaWineBottle size={20} />,
    lata: <GiSodaCan />,
};

export { enumRatings, enumType };