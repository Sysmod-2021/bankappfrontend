import styled from "styled-components";

const History = ({ transactions }) => {
  const transactionsList = transactions.map((transaction) => (
    <tr key={transaction.id}>
      <th scope="row">{transaction.sendingAccount}</th>
      <td>{transaction.receivingAccount}</td>
      <td>${transaction.amount}</td>
      <td>
        {transaction.date} {transaction.time}
      </td>
      <td>{transaction.status}</td>
    </tr>
  ));
  return (
    <StyledWrap>
      <div class="transactions-wapper">
        <h2>Transaction History</h2>
        <div class="transactions-container">
          <table class="responsive-table">
            <thead>
              <tr>
                <th scope="col">Sending Acoount</th>
                <th scope="col">Receiving Account</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody class="table-row">{transactionsList}</tbody>
          </table>
        </div>
      </div>
    </StyledWrap>
  );
};

export default History;

const StyledWrap = styled.div`
  .transactions-wapper h2 {
    width: 100%;
    margin-top: 30px;
    font-weight: 400;
    font-size: 1.3rem;
  }

  .transactions-container {
    margin: 5% 3%;

    @media (min-width: 48em) {
      margin: 2%;
    }

    @media (min-width: 75em) {
      margin: 2em auto;
      max-width: 75em;
    }
  }

  .responsive-table {
    width: 100%;
    margin-bottom: 1.5em;
    border-spacing: 0;

    @media (min-width: 48em) {
      font-size: 0.9em;
    }

    @media (min-width: 62em) {
      font-size: 1em;
    }

    thead {
      // Accessibly hide <thead> on narrow viewports
      position: absolute;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;

      @media (min-width: 48em) {
        // Unhide <thead> on wide viewports
        position: relative;
        clip: auto;
        height: auto;
        width: auto;
        overflow: auto;
      }

      th {
        background-color: #333333;
        border: 1px solid ${(props) => props.theme.color.outline};
        font-weight: normal;
        text-align: center;
        color: white;

        &:first-of-type {
          text-align: left;
        }
      }
    }

    // Set these items to display: block for narrow viewports
    tbody,
    tr,
    th,
    td {
      display: block;
      padding: 0;
      text-align: left;
      white-space: normal;
    }

    tr {
      @media (min-width: 48em) {
        // Undo display: block
        display: table-row;
      }
    }

    th,
    td {
      padding: 0.5em;
      vertical-align: middle;

      @media (min-width: 30em) {
        padding: 0.75em 0.5em;
      }

      @media (min-width: 48em) {
        // Undo display: block
        display: table-cell;
        padding: 0.5em;
      }

      @media (min-width: 62em) {
        padding: 0.75em 0.5em;
      }

      @media (min-width: 75em) {
        padding: 0.75em;
      }
    }

    tfoot {
      font-size: 0.8em;
      font-style: italic;

      @media (min-width: 62em) {
        font-size: 0.9em;
      }
    }

    tbody {
      @media (min-width: 48em) {
        // Undo display: block
        display: table-row-group;
      }

      tr {
        margin-bottom: 1em;

        @media (min-width: 48em) {
          // Undo display: block
          display: table-row;
          border-width: 1px;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        &:nth-of-type(even) {
          @media (min-width: 48em) {
            background-color: rgba(0, 0, 0, 0.12);
          }
        }
      }

      th[scope="row"] {
        background-color: #333333;
        color: white;

        @media (min-width: 30em) {
          border-left: 1px solid ${(props) => props.theme.color.outline};
          border-bottom: 1px solid ${(props) => props.theme.color.outline};
        }

        @media (min-width: 48em) {
          background-color: transparent;
          color: rgba(0, 0, 0.87);
          text-align: left;
        }
      }

      td {
        text-align: right;

        @media (min-width: 48em) {
          border-left: 1px solid ${(props) => props.theme.color.outline};
          border-bottom: 1px solid ${(props) => props.theme.color.outline};
          text-align: center;
        }

        &:last-of-type {
          @media (min-width: 48em) {
            border-right: 1px solid ${(props) => props.theme.color.outline};
          }
        }
      }

      td[data-type="currency"] {
        text-align: right;
      }

      td[data-title]:before {
        content: attr(data-title);
        float: left;
        font-size: 0.8em;
        color: rgba(0, 0, 0, 0.54);

        @media (min-width: 30em) {
          font-size: 0.9em;
        }

        @media (min-width: 48em) {
          // Don’t show data-title labels
          content: none;
        }
      }
    }
  }
`;
