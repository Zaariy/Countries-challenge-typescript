import styled from "styled-components";

const StyledSearchCountries = styled.div`
  padding: 2.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const InputSearch = styled.input`
  /* color: white; */
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.colorElements};
  padding: 1rem 1.2rem;
  min-width: 40%;
  border-radius: 5px;
  box-shadow: 0 0.1px 5px black;

  &::placeholder {
    color: ${({ theme }) => theme.colorText};
  }

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const FilterByRegion = styled.div`
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.colorElements};
  padding: 1rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 0.1px 5px black;
  span {
    margin-right: 1rem;
    display: block;
  }
`;
interface TypePropsRegion  {
  view : boolean ,
} 
const Regions = styled.ul`
  display : ${( props : TypePropsRegion) => props.view ?  'block' : 'none'} ;  
  color: ${({ theme }) => theme.colorText};
  background-color: ${({ theme }) => theme.colorElements};
  padding: 1rem 1.2rem;
  position: absolute;
  border-radius: 5px;
  width: calc(100% - 2.4rem);
  left: 0;
  top: 70px;
`;

const Region = styled.li`
  color: ${({ theme }) => theme.colorText};
  margin: 5px 0;
`;

export { StyledSearchCountries, InputSearch, FilterByRegion, Regions, Region };
