import styled from "styled-components";

const NavBar = ({ name, onLogOut }) => {
    return (
        <StyledContainer>
            <div className="main-container">
                <h2 className="greeting">{name}</h2>
                <button className="submit-btn" onClick={onLogOut}>Log Out</button>
            </div>
        </StyledContainer>
    )
}

export default NavBar;

const StyledContainer = styled.div`
    padding: 1.25rem 1.5rem;
    // background: white;

    .main-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .main-container .greeting {
        font-size: 1.25rem;
        font-weight: 500;
    }

    .main-container .submit-btn {
        text-align: center;
        padding: .5rem 1rem;
        border-radius: 5px;
        font-size: .9rem;
        background: ${props => props.theme.color.primary};
        font-weight: 500;
        color: white;
    }

    .main-container .submit-btn:hover,
    .main-container .submit-btn:focus {
        box-shadow: 0 0 0 2px white, 0 0 0 3px ${props => props.theme.color.primary};
    }
`