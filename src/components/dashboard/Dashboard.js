import styled from "styled-components";

const Dashboard = ({ balance, customerName, accountNumber }) => {
  return (
    <StyledWrap>
      <div class="wrapper">
        <div>
          <p class="balance">${balance.toLocaleString()}</p>
        </div>
        <div>
          <p> {customerName}</p>
          <p class="acc"> {accountNumber}</p>
        </div>
      </div>
    </StyledWrap>
  );
};

export default Dashboard;

const StyledWrap = styled.div`
  .wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0.5em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  p {
    margin-bottom: 0.5em;
  }

  .balance {
    font-size: 2em;
    font-weight: 400;
  }

  .acc {
    font-weight: 300;
  }

  @media (min-width: 750px) {
    .tab {
      max-width: 250px;
      margin-bottom: 0;
    }

    .wrapper {
      flex-direction: row;
    }
  }
`;
