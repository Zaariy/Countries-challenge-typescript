import styled from "styled-components";

const StyledCard = styled.div`
  height: 350px;
  width: 300px;
  background-color: ${({ theme }) => theme.colorElements};
  border-radius: 5px;
  cursor: pointer;
`;

const CardImg = styled.img`
  width: 300px;
  height: 200px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

const TitleCountry = styled.h2`
  font-family: 800;
  color: ${({ theme }) => theme.colorText};
  margin: 0.5rem 0;
  padding: 0 20px;
`;

const CountryInfo = styled.ul`
  list-style-type: none;
  padding: 0 20px;
`;

const InfoItem = styled.li`
  color: ${({ theme }) => theme.colorText};

  span {
    font-weight: 800;
    padding-right: 5px;
  }
`;

export { StyledCard, CardImg, TitleCountry, CountryInfo, InfoItem };
