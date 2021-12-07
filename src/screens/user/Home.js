import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import tablinks from "./tablinks";
import AppWrap from "../../components/AppWrap";
import { getCustomerDetails, logout } from "../../api";
import useLocalStorage from "../../hooks/useLocalStorage";
import Toast, { useFeedbackToast } from '../../components/Feedback';

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [customer, setCustomer] = useState(null);

  let navigate = useNavigate();
  const { open, close, feedback } = useFeedbackToast()
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", true);

  const onClickTabItem = (tab) => setActiveTab(tab);

  const onLogOut = async () => {
    try {
      const { data } = await logout()
      const { status } = data;

      if(status === "SUCCESS") {
        setIsLoggedIn(false);
        navigate("/login");
        return;
      }

      open("Logout Unsuccessful! Please try again", "error")
    } catch (error) {
      open(error.message, "error")
    }
  }

  const getCustomer = async () => {
    try {
      const { data: response } = await getCustomerDetails()
      const { status, data } = response;

      if(status === "SUCCESS") {
        setCustomer(data)
        return;
      }
      
    } catch(error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getCustomer()
  }, [])

  return (
    <AppWrap name={customer ? `Hello, ${customer?.firstName} ${customer?.lastName}` : "Hello"} onLogOut={onLogOut}>
      <StyledWrap>
        <div className="tab">
          {tablinks.map((tab) => (
            <button
              key={tab.id}
              className="tablinks"
              onClick={() => onClickTabItem(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="tabcontent">
          {tablinks.map((tab) => (
            <div
              key={tab.id}
              className={activeTab === tab.id ? "d-block" : "d-none"}
            >
              <h1 className="heading">{tab.title}</h1>
              <div className="content">
                {tab.component && customer? tab.component(customer) : "There is no content here"}
              </div>
            </div>
          ))}
        </div>
      </StyledWrap>

      { feedback && <Toast close={close} feedback={feedback} /> }
    </AppWrap>
  );
};

const StyledWrap = styled.div`
  margin: 2rem auto;
  align-items: baseline;
  max-width: 1200px;

  @media (min-width: 750px) {
    display: flex;
  }

  .tab {
    overflow: hidden;
    border: 1px solid ${(props) => props.theme.color.outline};
    background-color: ${(props) => props.theme.color.background02};
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 750px) {
    .tab {
      max-width: 250px;
      margin-bottom: 0;
    }
  }

  .tab button {
    background-color: inherit;
    padding: 0.75rem 1.25rem;
    transition: 0.3s;
    text-align: left;
    border-bottom: 1px solid ${(props) => props.theme.color.outline};
    font-size: 0.9rem;
  }

  .tab button:last-of-type {
    border-bottom: none;
  }

  .tab button:hover {
    background-color: ${(props) => props.theme.color.background03};
  }

  .tab button.active {
    background-color: ${(props) => props.theme.color.background04};
  }

  /* Style the tab content */
  .tabcontent {
    width: 100%;
  }

  @media (min-width: 750px) {
    .tabcontent {
      margin-left: 2rem;
    }
  }

  .tabcontent .d-none {
    display: none;
  }

  .tabcontent .d-block {
    display: block;
  }

  .tabcontent .heading {
    width: 100%;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme.color.outline};
    font-weight: 400;
    font-size: 1.3rem;
  }

  .tabcontent .content {
    padding: 1rem 0;
  }
`;

export default HomeScreen;
