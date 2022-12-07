import { useState, useEffect } from 'react';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import {
    BackButton,
    StyledDetails ,
    FlagCountry,
    BoxDetails,
    Title,
    CountryInformation,
    SubInfoCountry,
    InfoItem,
    BorderCountries,
    BorderUl,
    BorderItem,
    BorderCaption
} from './countriesDetails.styled';
import {fetchSubInformation } from './utils/functionHelper';
import {PropsInfoCountryApi , PropsType } from './typesProps';


export function CountryDetails(props : PropsType) {
    const [countryState, setCoutryState] = useState<PropsInfoCountryApi | []>([]);
    const [readyFetch, setReadyFetch] = useState(false);
    
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${props.nameCountry}`)
            .then((countryData) => countryData.json())
            .then((data: []) => {
                setCoutryState(data)
                setReadyFetch(true)
            })
    }, [props.nameCountry])
    
    console.log(countryState)
    return (
        <>
            <BackButton onClick={() => props.backpage()}>
                <FontAwesomeIcon icon={faArrowLeftLong}  />
                Back
            </BackButton>
        {
                readyFetch ? (
                    <StyledDetails>
                        <FlagCountry src={countryState[0]?.flags.png} ></FlagCountry>
                        <BoxDetails>
                            <Title>{countryState[0]?.name.common}</Title>
                            <CountryInformation>
                                <SubInfoCountry>
                                    <InfoItem>Native Name :<span>{fetchSubInformation(countryState[0]?.name.nativeName , 'nativeName')}</span></InfoItem>
                                    <InfoItem>Population : <span>{countryState[0]?.population }</span> </InfoItem>
                                    <InfoItem>Region : <span>{countryState[0]?.region }</span> </InfoItem>
                                    <InfoItem>Sub Region : <span>{countryState[0]?.subregion }</span></InfoItem>
                                    <InfoItem>Capital : <span>{countryState[0]?.capital[0]}</span> </InfoItem>
                                </SubInfoCountry>
                                <SubInfoCountry>
                                    <InfoItem>Top Level Domain : <span>{countryState[0]?.tld[0]}</span></InfoItem>
                                    <InfoItem>Currencies : <span>{fetchSubInformation(countryState[0]?.currencies , 'currencies')}</span></InfoItem>
                                    <InfoItem>Languages :  <ul>{fetchSubInformation(countryState[0]?.languages, 'lang').map((ele: string , index : number) => <li key={index}>{ele}</li>)}</ul> </InfoItem>
                                </SubInfoCountry>
                            </CountryInformation>
                            <BorderCountries>
                                <BorderCaption>Border Countries:</BorderCaption>
                                <BorderUl>
                                    {
                                        countryState[0]?.borders && countryState[0]?.borders.map((element , index ) => {
                                            return (<BorderItem key={index}>{element}</BorderItem>)
                                        })
                                    }
                                </BorderUl>
                            </BorderCountries>
                        </BoxDetails>
                    </StyledDetails>
            )  : null       
        }
        </>
    ); 
}