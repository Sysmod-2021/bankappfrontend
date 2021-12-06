import Transfer from "./transfer";
import Dashboard from "./dashboard";

const tablinks = [
  {
    id: 0,
    title: "Dashboard",
    component: (value) => <Dashboard value={value} />,
  },
  {
    id: 1,
    title: "P2P transfer",
    component: () => <Transfer />,
  }
];

export default tablinks;
