import styled from "styled-components";

const StyledCountries = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: ${({ theme }) => theme.size.meduim}) {
    justify-content: center;
  }
`;

export { StyledCountries };
