import styled from "styled-components";

const BackButton = styled.button`
    font-size: 16px;
    color :   ${({theme}) => theme.colorText} ;
    background-color :   ${({ theme }) => theme.colorElements} ;
    padding : 0.4rem 2rem ;
    outline :none ;
    border : none ;
    border-radius: 5px;
    margin-top: 60px  ;
    margin-bottom: 60px;
    cursor: pointer; 
    font-weight: 100;
    box-shadow: 0 0.1px 5px black;

    svg {
        margin-right: 10px;
    } 
`;
const StyledDetails = styled.div`
    /* min-height : 600px  ; */
    display: flex ;

    @media (max-width : ${({theme}) => theme.size.mobile}) {
        flex-direction: column;
    }
`;
const Title = styled.h2`
    color :   ${({ theme }) => theme.colorText} ;
    margin-bottom: 20px;
    font-size: 2rem;
    
    @media (max-width : ${({theme}) => theme.size.mobile}) {
        font-size: 1.5rem;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;
const BoxDetails = styled.div`
    /* display : flex ; */
    /* max-width: 60%; */

`;
const FlagCountry = styled.img`
    height: 250px ;
    margin-right: 100px;

    @media (max-width : ${({theme}) => theme.size.verysmall}) {
        width: 100%;
        margin-right: 0;
    }


`;

const CountryInformation = styled.div`
    /* height : 100% ; */
    display : flex ;
    justify-content: space-between ;
    width: 100% ;
    margin-bottom: 60px;

    @media (max-width : ${({theme}) => theme.size.meduim}) {
       flex-direction : column ;
    }
`;
const SubInfoCountry = styled.ul`
    margin-bottom: 5px ;
    /* margin-right: 100px; */
    @media (max-width : ${({theme}) => theme.size.meduim}) {
        margin-bottom: 0;
    }
`;
const InfoItem = styled.li`
    
    color :   ${({theme}) => theme.colorText} ;
    font-weight: 600;
    font-size: 15px ;
    margin: 10px 0 ;
    display: flex;

    span {
        font-size: 14px;
        font-weight: 100;
        display: block ;
        padding-left: 10px;
    } ;

    ul {
        display : flex ;

        li {

            padding-left: 5px;
            font-size: 14px;
            font-weight: 100;           
            margin: 0 2px;
        }
    }
`;

const BorderCountries = styled.div`
    width: 100% ;
    display : flex ;
    align-items: center ;
    
    @media (max-width : ${({theme}) => theme.size.meduim}) {
        flex-direction: column;
        align-items: flex-start ;
       
    }
`;
const BorderUl = styled.ul`
    display: flex ;
    flex-wrap: wrap ;

    
    @media (max-width : ${({theme}) => theme.size.meduim}) {
        /* flex-direction: column; */
       
    }
`;

const BorderItem = styled.li`
     color :   ${({ theme }) => theme.colorText} ;
     border-radius: 5px;
     background-color :   ${({ theme }) => theme.colorElements} ;
     font-size: 14px;
     font-weight: 100;
     width: fit-content ;
    margin-right : 10px ;
    margin-top: 10px ;
    padding: 0.4rem 2.4rem ;
    /* margin: 10px 0 ; */
    @media (max-width : ${({theme}) => theme.size.meduim}) {
        margin: 10px 0 ;
        margin-right: 10px;
       
    }
`;

const BorderCaption = styled.span`

    color :   ${({theme}) => theme.colorText} ;
    font-weight: 600;
    font-size: 15px ;
    margin-right: 10px ;

`;
export {
    BackButton,
    StyledDetails,
    Title,
    BoxDetails,
    FlagCountry,
    CountryInformation,
    SubInfoCountry,
    InfoItem,
    BorderCountries ,
    BorderUl ,
    BorderItem,
    BorderCaption

}