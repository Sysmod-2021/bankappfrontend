import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

export const logout = () => {
  return axios.post(`/logout`);
};

export const getCustomerDetails = () => {
  return axios.get(`/customers/details`);
};

export const authenticate = (email, password) => {
  return axios.post(`/authenticate`, {
    email,
    password,
  });
};

export const makeP2PTransfer = (receiverAccountId, amount, description) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/customers/transactions/create`,
    {
      credentials: "include",
      method: "post",
      body: JSON.stringify({
        receiverAccountId,
        amount,
        description,
      }),
    }
  );
};

export const makeP2PTransferWithIban = (receiverIban, amount, description) => {
  return fetch(
    `${process.env.REACT_APP_BASE_URL}/customers/transactions/createWithIban`,
    {
      credentials: "include",
      method: "post",
      body: JSON.stringify({
        receiverIban,
        amount,
        description,
      }),
    }
  );
};
