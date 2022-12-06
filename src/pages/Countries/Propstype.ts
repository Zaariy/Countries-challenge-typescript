type ApiCountryType = {
    name: {
        common : string
    }
    flags: {
        png : string
    }
    region : string ,
    population : number ,
    capital: string[],
    status: number,
    message : string

}

type PropsFilterApi = {
    filterCountriesApi: {
       region : string , 
        search: string, 
      
    } ,
    setName(name : string) : void ,
}
export type {ApiCountryType , PropsFilterApi}