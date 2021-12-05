import styled from "styled-components";

const Loader = () => {
    return (
        <Wrapper className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </Wrapper>
    );
};
  
export default Loader;
  
const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 24px;
        height: 24px;
        margin: 8px;
        border: 4px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
    }
    div:nth-child(1) {
        animation-delay: -0.45s;
    }
    div:nth-child(2) {
        animation-delay: -0.3s;
    }
    div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;