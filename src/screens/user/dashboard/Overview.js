import styled from "styled-components";
import CurrencyFormat from 'react-currency-format';

const Overview = ({ balance, customerName, accountNumber }) => {

  return (
    <StyledWrap>
      <div className="wrapper">
        <div>
          <CurrencyFormat 
            value={balance} 
            thousandSeparator={true} 
            prefix="€"
            displayType="text"
            className="balance"
          />
        </div>
        <div className="is-right">
          <p>{customerName}</p>
          <p className="acc"> {accountNumber}</p>
        </div>
      </div>
    </StyledWrap>
  );
};

export default Overview;

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

  .is-right {
    text-align: right;
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
