import Transactions from "../../components/transactions";

const tablinks = [
  {
    id: 0,
    title: "Dashboard",
    component: null,
  },
  {
    id: 1,
    title: "New transfer",
    component: null,
  },
  {
    id: 2,
    title: "Transactions",
    component: <Transactions />,
  },
];

export default tablinks;
