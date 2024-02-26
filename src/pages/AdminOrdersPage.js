import Navbar from "../features/Navbar/Navbar";
import AdminOrders from "../features/admin/components/AdminOrders";

function AdminOrdersPage() {
  return (
    <div>
      <Navbar>
        <AdminOrders></AdminOrders>
      </Navbar>
    </div>
  );
}

export default AdminOrdersPage;
