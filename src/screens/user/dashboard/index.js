import History from "./History";
import Overview from "./Overview";

const Dashboard = (props) => {
  const { value } = props;
  const customerName = `${value.firstName} ${value.lastName}`;

  return (
    <div>
      <Overview
        balance={value.balance}
        customerName={customerName}
        accountNumber={value.accountId}
      />
      <History transactions={value.transactions} />
    </div>
  );
};

export default Dashboard;
