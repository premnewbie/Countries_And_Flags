import './CountryCard.css';

const CountryCard = ({cardData}) => {
    return ( 
    <div className="card">
        <img src={cardData.flags.png} alt={cardData.flags.alt} />
        <p>{cardData.name.common}</p>
    </div> );
}
 
export default CountryCard;