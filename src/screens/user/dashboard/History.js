import styled from "styled-components";
import CurrencyFormat from "react-currency-format";

const History = ({ transactions, customerAccID }) => {
  return (
    <StyledWrap>
      <div className="transactions-wapper">
        <h2>Transaction History</h2>
        <div className="transactions-container">
          {transactions && transactions.length > 0 ? (
            <table className="responsive-table">
              <thead>
                <tr>
                  <th scope="col">Sending Account</th>
                  <th scope="col">Receiving Account</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Transaction Description</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Type</th>
                </tr>
              </thead>
              <tbody className="table-row">
                {transactions.map((transaction, index) => (
                  <tr key={index} className="table-el">
                    <td>
                      <span>Sending Account</span>{" "}
                      {transaction.sourceIban
                        ? transaction.sourceIban
                        : "From Bank"}
                    </td>
                    <td>
                      <span>Receiving Account</span> {transaction.destIban}
                    </td>
                    <td>
                      <span>Amount</span>
                      <CurrencyFormat
                        value={transaction.amount}
                        thousandSeparator={true}
                        prefix="€"
                        displayType="text"
                        className="balance"
                      />
                    </td>
                    <td>
                      <span>Transaction Description</span>{" "}
                      {transaction.description}
                    </td>
                    <td>
                      <span>Date</span>
                      {new Date(transaction.timestamp).toUTCString()}
                    </td>
                    <td>
                      <span>Status</span>
                      {transaction.status}
                    </td>
                    <td>
                      <span>Type</span>
                      {transaction.destId === customerAccID
                        ? "Credit"
                        : "Debit"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3 className="noTransact">
              You haven't made any transactions yet.
            </h3>
          )}
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
    margin: 5% 0;

    @media (min-width: 48em) {
      margin: 2% 0;
    }

    @media (min-width: 75em) {
      margin: 2em auto;
      max-width: 75em;
    }
  }

  .table-el {
    border-bottom: 1px solid #e0e0e0;
  }

  .noTransact {
    text-align: center;
    width: 100%;
    font-weight: 300;
    font-size: 1.8rem;
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
        background-color: ${(props) => props.theme.color.black};
        border: 1px solid ${(props) => props.theme.color.outline};
        font-weight: normal;
        text-align: left;
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
        display: flex;
        justify-content: space-between;
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

    td span:not(.balance) {
      display: block;
      text-decoration: underline;

      @media (min-width: 30em) {
        font-style: italic;
        display: block;
        text-decoration: none;
      }

      @media (min-width: 48em) {
        display: none;
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

      td {
        text-align: left;

        @media (min-width: 48em) {
          border-left: 1px solid ${(props) => props.theme.color.outline};
          border-bottom: 1px solid ${(props) => props.theme.color.outline};
          text-align: left;
        }

        &:last-of-type {
          @media (min-width: 48em) {
            border-right: 1px solid ${(props) => props.theme.color.outline};
          }
        }
      }

      td[data-type="currency"] {
        text-align: left;
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
