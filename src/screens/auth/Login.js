import styled from "styled-components";
import { useForm } from "react-hook-form";

import PageWrap from "../../components/AuthWrap";


const LoginScreen = () => {

  const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async data => { console.log(data); };

  return (
    <PageWrap>
      <StyledWrap>
        <h2 className="heading">Openbank Login</h2>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">
            Username
            <input id="username" type="text" {...register("username", { required: "Please enter your username" })} />
          </label>    
          <label htmlFor="password">
            Password
            <input id="password" type="password" {...register("password", { required: "Please enter your password" })} />
          </label>   
          <button className="submit-btn">Login</button>
        </form>
      </StyledWrap>
    </PageWrap>
  );
}

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
    border: 1px solid ${props => props.theme.color.outline}; 
  }

  .login-form label {    
    width: 100%;
  }

  .login-form input {
    min-height: 40px;
    width: 100%;
    margin: .5rem 0 1.5rem;
    padding: 0 .75rem;
    outline-color: ${props => props.theme.color.primary};
    border: 1px solid ${props => props.theme.color.outline02};
  }

  .login-form .submit-btn {
    text-align: center;
    padding: .75rem 1.25rem;
    min-width: 150px;
    border-radius: 5px;
    font-size: .9rem;
    margin-top: 1rem;
    background: ${props => props.theme.color.primary};
    font-weight: bold;
	  color: white;
  }

  .login-form .submit-btn:hover,
  .login-form .submit-btn:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px ${props => props.theme.color.primary};
  }
`

export default LoginScreen;
