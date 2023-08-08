import './styles.css';
import cars from '../../assets/cars.png';
import Button from '../Button';

export default function Card() {

    return (
        <div className="ct-card" >
            <img src={cars} alt="Carro" />
            <h3>Audi Supra TT</h3>
            <p><i>Lorem ipsum dolor</i></p>
         
            <Button />
        </div>
    );
}
