import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {
    StyledSearchCountries ,
    InputSearch,
    FilterByRegion ,
    Regions ,
    Region ,
} from './searchcountries.styled';

type props = {
    setInforamtionCountries : (region : string , searchName?: string) => void
}

export function SearchCountries(props: props) {

    const [showRegion , setStateRegion] = useState(false);
    function closeUlRegion() {
        setStateRegion(false);
    }
    return (
        <StyledSearchCountries>
            <InputSearch
                type={'text'}
                placeholder={'Search for a country...'}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setInforamtionCountries('' , event.target.value) }
            >
            </InputSearch>
            <FilterByRegion >
                <span onClick={() => {
                    setStateRegion((prv) => prv = !prv)
                }}>Filter By Region</span>  

                <FontAwesomeIcon icon={faCaretDown} />
                <Regions view={showRegion} >
                    <Region onClick={() => {
                        props.setInforamtionCountries('Africa')
                        closeUlRegion()
                    }}>Africa</Region>
                    <Region onClick={() => {
                        props.setInforamtionCountries('Americas')
                        closeUlRegion()
                    }}>Americas</Region>
                    <Region onClick={() => {
                        props.setInforamtionCountries('Asia')
                        closeUlRegion()    
                    }}>Asia</Region>
                    <Region onClick={() => {
                        props.setInforamtionCountries('Europe')
                        closeUlRegion()
                    }}>Europe</Region>
                    <Region onClick={() => {
                        props.setInforamtionCountries('Oceania')
                        closeUlRegion()
                    }}>Oceania</Region>
                </Regions>
            </FilterByRegion>
        </StyledSearchCountries>
    );
}; 
