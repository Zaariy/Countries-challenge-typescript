
function fetchSubInformation(objectInfo: any, typefetch: string) {
        /*
            This function takes an object , extracts its keys and then 
            uses it to output the value
        */
        const key = Object.keys([objectInfo][0])[0]
        
        if (typefetch === 'nativeName') {
            return objectInfo[key].common
        }
        if (typefetch === 'currencies') {
            
            return objectInfo[key].name
        }
        if (typefetch === 'lang') {
            const keyLang : string[] = Object.keys([objectInfo][0])
            const languagesCountry: string[] = [];

            for (let i = 0; i < keyLang.length; i++){
                languagesCountry.push(objectInfo[keyLang[i]])
            }

            return languagesCountry
        }
        
}
export {fetchSubInformation}
