import Transactions from "../../components/transactions";
import UserInfo from "../../components/dashboard";

const tablinks = [
  {
    id: 0,
    title: "Dashboard",
    component: <UserInfo />,
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
