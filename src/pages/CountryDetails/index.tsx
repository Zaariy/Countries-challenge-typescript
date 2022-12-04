import { useState , useEffect } from 'react';
type PROPSTYPE = {
    nameCountry : string 
}

export function CountryDetails(props : PROPSTYPE) {
    const [countryState , setCoutryState] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${props.nameCountry}`)
            .then((countryData) => countryData.json())
            .then((data: []) => {
                setCoutryState(data)
            })
    }, [props.nameCountry])
    
    return(
        <h1>
            {props.nameCountry}
        </h1>
    ); 
}