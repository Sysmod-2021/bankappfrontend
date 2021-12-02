import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const makeP2PTransfer = (customerId, receiverAccountId, amount, description) => {
    return axios.post(`/customers/${customerId}/transactions/create?receiverAccountId=${receiverAccountId}&amount=${amount}&description=${description}`)
}

