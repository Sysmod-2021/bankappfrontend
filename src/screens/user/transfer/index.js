import { useState } from "react";
import styled from "styled-components";
import CurrencyFormat from "react-currency-format";

import { makeP2PTransferWithIban } from "../../../api";
import Loader from "../../../components/Loader";
import Toast, { useFeedbackToast } from "../../../components/Feedback";

const Transfer = () => {
  const { open, close, feedback } = useFeedbackToast();

  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [receiverIban, setReceiverIban] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(amount) <= 0) {
      open("Amount has to be greater than 0", "error");
      return;
    }

    try {
      const response = await makeP2PTransferWithIban(
        receiverIban,
        amount,
        description
      );
      const responseData = await response.json();
      const { message, status, data } = responseData;

      setLoading(false);

      if (status === "ERROR" && message) {
        open(message, status);
        return;
      }

      if (data && data.status !== "EXECUTED") {
        open(data.rejectionDescription, "error");
        return;
      }

      setAmount("");
      setDescription("");
      setReceiverIban("");
      open("Your transfer was successful :)", status);
    } catch (error) {
      open(error.message, "error");
    }
  };

  return (
    <>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="beneficiary-iban">
          Beneficiary Account
          <input
            id="beneficiary-iban"
            type="text"
            value={receiverIban}
            onChange={(e) => setReceiverIban(e.target.value)}
            placeholder="Beneficiary IBAN"
            required
          />
        </label>

        <label htmlFor="amount">
          Transfer Amount
          <div className="is-amount">
            <input
              className="is-currency"
              type="text"
              value="€"
              required
              disabled
            />
            <CurrencyFormat
              id="amount"
              value={amount}
              decimalScale={3}
              thousandSeparator={true}
              placeholder="Transfer Amount"
              allowNegative={false}
              onValueChange={(values) => setAmount(values.value)}
              required
            />
          </div>
        </label>

        <label htmlFor="description">
          Transaction Description
          <input
            type="text"
            id="description"
            value={description}
            placeholder="Transaction Description"
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? <Loader /> : "Make Transfer"}
        </button>
      </StyledForm>

      {feedback && <Toast close={close} feedback={feedback} />}
    </>
  );
};

export default Transfer;

const StyledForm = styled.form`
  max-width: 750px;
  width: 100%;

  label {
    display: block;
    margin-bottom: 1.25rem;
    font-size: 0.9rem;
    font-weight: 600;

    .is-amount {
      display: flex;
      position: relative;

      input {
        padding-left: 50px;
      }

      .is-currency {
        position: absolute;
        max-width: 50px;
        width: 100%;
        border: none;
        left: 0;
        padding-left: 0.75em;
        background: transparent;
        font-weight: 600;
        font-size: 1rem;
        text-align: center;
      }
    }
  }

  input {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    padding: 0.75rem;
    font-size: 0.9rem;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.color.outline};
    background-color: ${(props) => props.theme.color.white};

    &:focus {
      outline: 2px solid ${(props) => props.theme.color.primary};
      border: none;
    }
  }

  button {
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 0.9rem;
    background: ${(props) => props.theme.color.primary};
    font-weight: 500;
    color: white;
    min-width: 125px;
    min-height: 40px;
  }
`;
