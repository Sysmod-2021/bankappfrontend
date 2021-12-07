import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const getCustomerDetails = customerId => {
    return axios.get(`/customers/${customerId}/details`)
}

export const makeP2PTransfer = (customerId, receiverAccountId, amount, description) => {
    return axios.post(`/customers/${customerId}/transactions/create`, {
        receiverAccountId,
        amount, 
        description
    })
}