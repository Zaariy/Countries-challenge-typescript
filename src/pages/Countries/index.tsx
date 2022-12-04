import { useState , useEffect } from 'react';
import { 
    StyledCountries
} from './counties.styled';
import Card from '../../components/Card';

type APICOUNTRYTYPE = {
    name: {
        common : string
    }
    flags: {
        png : string
    }
    region : string ,
    population : number ,
    capital : string[]

}

type PROPSFILTERAPI = {
    filterCountriesApi: {
       region : string , 
        search: string, 
      
    } ,
    setName(name : string) : void ,
}

export default function Countries(props  : PROPSFILTERAPI) {
    const [countriesState, setCountriesState]  = useState([]); 
    console.log(props)
    useEffect(() => {
        fetch(props.filterCountriesApi.search || props.filterCountriesApi.region)
            .then((countriesData) => countriesData.json())
            .then((data: []) => {
                setCountriesState(data)
            })
    }, [props.filterCountriesApi ])
        
    return (
        <StyledCountries>
            {
                countriesState.map((country: APICOUNTRYTYPE, index) => {
                    
                    return (

                        <Card key={index}
                            onClickEvent={() => props.setName(country.name.common)}
                            name={country.name.common}
                            Population={country.population}
                            Region={country.region}
                            capital={country.capital ? country.capital[0] : 'Unknown'}
                            img={country.flags.png}
                        ></Card>
                       
                    );
                })
            }
        </StyledCountries>
    );
}