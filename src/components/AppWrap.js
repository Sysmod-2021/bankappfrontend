import styled from "styled-components";
import NavBar from "./NavBar";

const AppWrap = ({ name, children }) => {
  return (
    <StyledContainer>
      <NavBar name={name} />
      <StyledContentWrap>{children}</StyledContentWrap>
    </StyledContainer>
  );
};

export default AppWrap;

const StyledContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

const StyledContentWrap = styled.div`
  background: ${(props) => props.theme.color.background};
  padding: 1.5rem;
  min-height: 100vh;
`;
