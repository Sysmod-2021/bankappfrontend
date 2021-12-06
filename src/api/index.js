import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

export const logout = () => {
    return axios.post(`/logout`)
}

export const getCustomerDetails = () => {
    return axios.get(`/customers/details`)
}

export const authenticate = (email, password) => {
    return axios.post(`/authenticate`, {
        email,
        password
    })
}

export const makeP2PTransfer = (receiverAccountId, amount, description) => {
    return axios.post(`/customers/transactions/create`, {
        receiverAccountId,
        amount, 
        description
    })
}