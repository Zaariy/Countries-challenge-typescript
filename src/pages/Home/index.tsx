import { useState } from 'react';
import Header from '../../components/Header/index';
import { CountryDetails } from '../CountryDetails';
import { Container } from '../../Global.style';
import Countries from '../Countries';
import { SearchCountries } from '../../components/SearchCountries';
import { StyledHome } from './home.styled';

type proptype = {
    clickEvent : () => void
}

function Home(props : proptype) {
    const [infoSearch  , setInfoSearch] = useState({
        search : '' ,
        region : 'https://restcountries.com/v3.1/region/Africa' ,
        name : ''
    })

    function setSearchValues(region: string, searchName?: string) {
        
        if (searchName) {
            setInfoSearch((prv) => {
                return { ...prv, search: `https://restcountries.com/v3.1/name/${searchName}`, region: "" , name: prv.name }
            })
            return
        }
        if (region) {

            setInfoSearch((prv) => {
                return { ...prv, search: "", region: `https://restcountries.com/v3.1/region/${region}` , name: prv.name }
            })
        }else {
            setInfoSearch((prv) => {
                return {...prv , search : "" , region : `https://restcountries.com/v3.1/region/Africa` , name: prv.name}
            })
        }
    }

    function setNameCountry(name: string) : void {
        setInfoSearch((prv) => {
            return { ...prv, search: prv.search, region: prv.region , name: name }
        })
    }
    function clearName() {

        setInfoSearch((prv) => {
            return { ...prv  , search : prv.search , region : prv.region , name : ''}
        })
    }
    function switchComponents() {
        switch (infoSearch.name.length) {
            case 0:
                return (
                     <Countries
                        filterCountriesApi={infoSearch}
                        setName={setNameCountry}
                    />    
                    
                )
            default:
                return (
                    <CountryDetails nameCountry={infoSearch.name} backpage={clearName} ></CountryDetails>
                )
        }
    }
    
    
    return (
        <>
            <Header clickEvent={props.clickEvent}  />
            <StyledHome>
                <Container>
                    {infoSearch.name.length === 0 ? <SearchCountries setInforamtionCountries={setSearchValues} /> : null}
                    {switchComponents()}
                </Container>
            </StyledHome>
        </>
    );
}

export default Home;