import styled from "styled-components";

const StyledHome = styled.div`
  background-color: ${({ theme }) => theme.colorBackground};
  min-height: calc(100vh - 70px);
  /* padding-top: 50px; */
`;
export { StyledHome };
