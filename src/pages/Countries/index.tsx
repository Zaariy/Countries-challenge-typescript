import { useState , useEffect } from 'react';
import { 
    StyledCountries
} from './counties.styled';
import Card from '../../components/Card';
import {PropsFilterApi , ApiCountryType } from './Propstype';


export default function Countries(props  : PropsFilterApi) {
    const [countriesState, setCountriesState]  = useState([]); 
    // const [CountryNotFound, setErrorCountry] = useState(true);
    
    useEffect(() => {
        fetch(props.filterCountriesApi.search || props.filterCountriesApi.region)
            .then((countriesData) => countriesData.json())
            .then((data: []) => {
                setCountriesState(data)
                
            })
    }, [props.filterCountriesApi])

    return (
        <StyledCountries>
            {
                countriesState?.map((country: ApiCountryType, index) => {  

                    return (
                        <Card key={index}
                            onClickEvent={() => props.setName(country?.name.common)}
                            name={country?.name.common}
                            Population={country?.population}
                            Region={country?.region}
                            capital={country?.capital ? country.capital[0] : 'Unknown'}
                            img={country?.flags.png}
                        ></Card> 
                    );
                }) 
            }
        </StyledCountries>
    );
}