import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { authenticate } from "../../api";
import Loader from "../../components/Loader";
import PageWrap from "../../components/AuthWrap";
import useLocalStorage from "../../hooks/useLocalStorage";
import Toast, { useFeedbackToast } from "../../components/Feedback";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
  const { open, close, feedback } = useFeedbackToast();
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await authenticate(email, password);
      const { status, message } = data;

      setLoading(false);

      if (status === "SUCCESS") {
        setIsLoggedIn(true);

        setEmail("");
        setPassword("");
        navigate("/");
        return;
      }

      open(message, "error");
    } catch (error) {
      if (error.response.status === 400) {
        open("Invalid Credentials", "error");
        return;
      }

      if (error.response.data.message) {
        open(error.response.data.message, "error");
        return;
      }

      open(error.message, "error");
    }
  };

  return (
    <PageWrap>
      <StyledWrap>
        <h2 className="heading">Openbank Login</h2>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">
            Email
            <input
              required
              id="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              required
              id="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? <Loader /> : "Login"}
          </button>
        </form>
      </StyledWrap>

      {feedback && <Toast close={close} feedback={feedback} />}
    </PageWrap>
  );
};

const StyledWrap = styled.div`
  min-height: 500px;
  max-width: 400px;
  width: 100%;

  h2.heading {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.75rem;
    font-weight: 400;
  }

  .login-form {
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: white;
    border: 1px solid ${(props) => props.theme.color.outline};
  }

  .login-form label {
    width: 100%;
  }

  .login-form input {
    min-height: 40px;
    width: 100%;
    margin: 0.5rem 0 1.5rem;
    padding: 0 0.75rem;
    outline-color: ${(props) => props.theme.color.primary};
    border: 1px solid ${(props) => props.theme.color.outline02};
  }

  .login-form .submit-btn {
    text-align: center;
    padding: 0.75rem 1.25rem;
    min-width: 150px;
    border-radius: 5px;
    font-size: 0.9rem;
    margin-top: 1rem;
    background: ${(props) => props.theme.color.primary};
    font-weight: bold;
    color: white;
  }

  .login-form .submit-btn:hover,
  .login-form .submit-btn:focus {
    box-shadow: 0 0 0 2px white,
      0 0 0 3px ${(props) => props.theme.color.primary};
  }
`;

export default LoginScreen;
