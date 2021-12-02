import { useState } from "react";
import styled from "styled-components";

import tablinks from "./tablinks";
import AppWrap from "../../components/AppWrap";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onClickTabItem = (tab) => setActiveTab(tab);

  const customer = {
    id: "f709ac6a-f8e5-4f07-9171-ec5a10eeaecb",
    balance: 100,
    currency: "EUR",
    firstName: "John",
    lastName: "Doe",
    accountID: "01e09b2c-72e0-40f9-ab94-9b3bb6331741"
  }

  return (
    <AppWrap name={`${customer.firstName} ${customer.lastName}`}>
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
                {tab.component ? tab.component(customer) : "There is no content here"}
              </div>
            </div>
          ))}
        </div>
      </StyledWrap>
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
