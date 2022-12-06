type PropsType = {
    nameCountry : string , 
    backpage: () => void;
}

type PropsInfoCountryApi = [{
    name: {
        common: string,
        nativeName: {} , 
    }
    flags: {
        png: string
    },
    capital: string[],
    region: string,
    subregion: string,
    population: string,
    tld: string[] ,
    currencies: {} ,
    languages: {} ,

}]
export type {PropsType , PropsInfoCountryApi} 