import { useState } from "react";
import History from "./History";
import Overview from "./Overview";

const Dashboard = () => {
  const [balance] = useState(14423.82);
  const [customerName] = useState("Chioma Nkem-Eze");
  const [accountNumber] = useState("EZY-123456789-123456789");
  const [transactions] = useState([
    {
      id: 1,
      sendingAccount: "EZY-123456789-123456789",
      receivingAccount: "EZY-123456789-123456789",
      amount: "100.00",
      date: "2020-01-01",
      time: "12:00:00",
      status: "Success",
    },
    {
      id: 2,
      sendingAccount: "EZY-123456789-123456789",
      receivingAccount: "EZY-123456789-123456789",
      amount: "100.00",
      date: "2020-01-01",
      time: "12:00:00",
      status: "Revoked",
    },
    {
      id: 3,
      sendingAccount: "EZY-123456789-123456789",
      receivingAccount: "EZY-123456789-123456789",
      amount: "100.00",
      date: "2020-01-01",
      time: "12:00:00",
      status: "Success",
    },
    {
      id: 4,
      sendingAccount: "EZY-123456789-123456789",
      receivingAccount: "EZY-123456789-123456789",
      amount: "100.00",
      date: "2020-01-01",
      time: "12:00:00",
      status: "Revoked",
    },
  ]);

  return (
    <div>
      <Overview
        balance={balance}
        customerName={customerName}
        accountNumber={accountNumber}
      />
      <History transactions={transactions} />
    </div>
  );
};

export default Dashboard;
