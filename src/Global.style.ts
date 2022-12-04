import styled from "styled-components";

// const GlobalStyle = createGlobalStyle(`

// `)

const Container = styled.div`
  height: 100%;
  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (min-width: ${({ theme }) => theme.size.mobile}) {
    margin-left: 60px;
    margin-right: 60px;
  }

  @media (min-width: ${({ theme }) => theme.size.larg}) {
    margin-left: 150px;
    margin-right: 150px;
  }
`;

export { Container };
