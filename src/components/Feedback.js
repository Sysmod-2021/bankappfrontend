import { useState } from "react";
import styled from "styled-components";

export const useFeedbackToast = () => {
    const [feedback, setFeedbackObj] = useState(null);

    const close = () => setFeedbackObj(null)

    const open = (caption, type = "info", timeout = 3000) => {
        setFeedbackObj({ type: type.toLowerCase(), caption });
        setTimeout(() => close(), timeout);
    }

    return { open, close, feedback }
}

const Toast = ({ close, feedback }) => {
    return (
        <Wrapper type={feedback.type}>
            <p>{feedback.caption}</p>
            <Button onClick={close}>
                <i className="far fa-times-circle"></i>
            </Button>
        </Wrapper>
    );
};
  
export default Toast;
  
const Button = styled.button`
    border-radius: 100%;
    width: fit-content;
    cursor: pointer;
    margin-left: 1rem;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    outline: none;
    color: white;
`;
  
const Wrapper = styled.div`
    position: absolute;
    top: 5rem;
    right: 1rem;
    padding: .75rem;
    border-radius: 3px;
    background-color: ${(props) => {
        if (props.type === "success") return "#58b259";
        if (props.type === "error") return "#f44236";
    }};
    color: #fff;
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
`;