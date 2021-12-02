import { useState } from "react";
import styled from "styled-components";
import CurrencyFormat from 'react-currency-format';

import { makeP2PTransfer } from "../../../api";

const Transfer = props => {

    const { value } = props

    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [receiverAccountID, setReceiverAccountID] = useState("")

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const { data: response } = await makeP2PTransfer(value.id, receiverAccountID, amount, description)
            const { message, status, data } = response;


            if(status === "ERROR" && message) {
                return;
            }

            setAmount("");
            setDescription("");
            setReceiverAccountID("");

            

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <StyledForm onSubmit={e => handleSubmit(e)}>
            <label htmlFor="beneficiary-account">
                Beneficiary Account
                <input 
                    id="beneficiary-account" 
                    type="text" 
                    value={receiverAccountID}
                    onChange={e => setReceiverAccountID(e.target.value)} 
                    placeholder="Beneficiary Account" 
                    required 
                />
            </label>

            <label htmlFor="amount">
                Transfer Amount
                <div className="is-amount">
                    <input className="is-currency" type="text" value="€" required disabled />
                    <CurrencyFormat 
                        id="amount" 
                        value={amount} 
                        decimalScale={3} 
                        thousandSeparator={true} 
                        placeholder="Transfer Amount"
                        onValueChange={values  => setAmount(values.value)} 
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
                    onChange={e => setDescription(e.target.value)} 
                    required 
                />
            </label>

            <button type="submit">Make Transfer</button>
        </StyledForm>
    )

}

export default Transfer;


const StyledForm = styled.form`
    max-width: 750px;
    width: 100%;

    label {
        display: block;
        margin-bottom: 1.25rem;
        font-size: .9rem;
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
                padding-left: .75em;
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
        margin-top: .5rem;
        padding: .75rem;
        font-size: .9rem;
        border-radius: 5px;
        border: 1px solid ${(props) => props.theme.color.outline};
        background-color: ${(props) => props.theme.color.white};

        &:focus {
            outline: 2px solid ${props => props.theme.color.primary};
            border: none;
        }
    }

    button {
        text-align: center;
        padding: .5rem 1rem;
        border-radius: 5px;
        font-size: .9rem;
        background: ${props => props.theme.color.primary};
        font-weight: 500;
        color: white;
    }
`;