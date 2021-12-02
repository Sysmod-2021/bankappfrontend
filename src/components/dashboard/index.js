import { useState } from "react";
import Dashboard from "./Dashboard";

const UserInfo = () => {
  const [balance] = useState(14423.82);
  const [customerName] = useState("Chioma Nkem-Eze");
  const [accountNumber] = useState("EZY-123456789-123456789");

  return (
    <div>
      <Dashboard
        balance={balance}
        customerName={customerName}
        accountNumber={accountNumber}
      />
    </div>
  );
};

export default UserInfo;