import React from "react";
import Navbar from "../features/Navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";

function UserOrdersPage() {
  return (
    <div>
      <Navbar>
        <h1 className="text-3xl my-4 font-bold text-center text-blue-900 bg-white py-3">
          My Orders
        </h1>
        <UserOrders />
      </Navbar>
    </div>
  );
}

export default UserOrdersPage;
