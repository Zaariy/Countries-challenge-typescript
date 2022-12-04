import styled from "styled-components";

const StyledHeader = styled.header`
  font-size: 2em;
  background-color: ${({ theme }) => theme.colorElements};
  height: 70px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colorText};
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    font-size: 1rem;
  }
`;

const SwitchThemes = styled.button`
  border: none;
  color: ${({ theme }) => theme.colorText};
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  background: none;
`;

export { StyledHeader, StyledH1, SwitchThemes, HeaderContent };
