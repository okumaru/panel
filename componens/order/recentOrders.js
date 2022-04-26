import { Box, Text, Link } from "@chakra-ui/react";
import style from "./recentOrders.module.css";

const orderData = [
  {
    orderId: "#1101",
    customerName: "Alex Smith",
    product: "Template Wordpress",
    amount: "Rp. 19,000,000",
    status: "Unpaid",
  },
  {
    orderId: "#1102",
    customerName: "Prezy Mark",
    product: "Full CRM App",
    amount: "Rp. 100,000,000",
    status: "Paid",
  },
  {
    orderId: "#1103",
    customerName: "Ayaan Bowen",
    product: "Custom Request Web App",
    amount: "Rp. 24,000,000",
    status: "Paid",
  },
  {
    orderId: "#1104",
    customerName: "Jansh Brown",
    product: "Plugin Wordpress",
    amount: "Rp. 18,000,000",
    status: "Unpaid",
  },
];

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Order ID</th>
        <th>Customer</th>
        <th>Product</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const { orderData } = props;
  return (
    <tbody>
      {orderData.map((order, index) => {
        return (
          <tr key={index}>
            <td className={style.orderId}>
              <Link>{order.orderId}</Link>
            </td>
            <td className={style.customer}>{order.customerName}</td>
            <td>{order.product}</td>
            <td className={style.amount}>{order.amount}</td>
            <td>
              <Text
                className={`${style.status} ${
                  order.status === "Unpaid" && style.unpaid
                } ${order.status === "Paid" && style.paid}`}
              >
                {order.status}
              </Text>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export const RecentOrders = () => {
  return (
    <Box>
      <Text className={style.title}>Recent Orders</Text>
      <Text className={style.subtitle}>This data is newest orders.</Text>
      <Box className={style.wrapper}>
        <table>
          <TableHeader />
          <TableBody orderData={orderData} />
        </table>
      </Box>
    </Box>
  );
};
