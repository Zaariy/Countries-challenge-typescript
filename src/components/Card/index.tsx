import {
    StyledCard,
    CardImg,
    TitleCountry ,
    CountryInfo,
    InfoItem
} from './card.style';


type PropsCountries = {
    name: string ,
    Population : number  ,
    Region : string ,
    capital: string ,
    img: string
    onClickEvent : () => void ,
    
}

export default function Card(props : PropsCountries) {
    return (
        <StyledCard onClick={props.onClickEvent}>
            <CardImg src={props.img} alt='img' ></CardImg>
            <TitleCountry>{props.name }</TitleCountry>
            <CountryInfo>
                <InfoItem>
                    <span>Population:</span>
                    {props.Population} 
                </InfoItem>
                <InfoItem>
                    <span>Region:</span>
                    {props.Region} 
                </InfoItem>
                <InfoItem>
                    <span>Capital:</span>
                    {props.capital} 
                </InfoItem>
            </CountryInfo>
        </StyledCard>
    );
}

