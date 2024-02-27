import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITEMS_PER_PAGE } from "../../../app/constants";
import { PencilIcon, EyeIcon } from "@heroicons/react/24/outline";
import {
  fetchAllOrdersAsync,
  selectOrders,
  selectTotalOrders,
  updateOrderAsync,
} from "../../order/orderSlice";
import Pagination from "../../common/Pagination";

function AdminOrders() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const orders = useSelector(selectOrders);
  const totalOrders = useSelector(selectTotalOrders);
  const [editableOrderId, setEditableOrderId] = useState(-1);

  const handleEdit = (order) => {
    console.log("order id is --->", order.id);
    setEditableOrderId(order.id);
  };

  const handleShow = (order) => {
    console.log("handleEdit Clicked");
  };

  const handleUpdate = (e, order) => {
    const updatedOrder = { ...order, status: e.target.value };
    dispatch(updateOrderAsync(updatedOrder));
    setTimeout(() => {
      const pagination = { _page: page, _per_page: ITEMS_PER_PAGE };
      dispatch(fetchAllOrdersAsync(pagination));
    }, 15);
    setEditableOrderId(-1);
  };

  const handlePage = (page) => {
    setPage(page);
    const pagination = { _page: page, _per_page: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync(pagination));
  };

  useEffect(() => {
    const pagination = { _page: page, _per_page: ITEMS_PER_PAGE };
    dispatch(fetchAllOrdersAsync(pagination));
  }, [dispatch, page]);

  const chooseColor = (status) => {
    switch (status) {
      case "pending":
        return `bg-gray-200 text-black`;
      case "dispatched":
        return `bg-yellow-200 text-yellow-700`;
      case "delivered":
        return `bg-green-200 text-green-700`;
      case "cancelled":
        return `bg-red-200 text-red-700`;
      default:
        return `bg-pink-200 text-pink-700`;
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen bg-gray-100 flex  justify-center font-sans overflow-hidden">
          <div className="w-full">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Order</th>
                    <th className="py-3 px-6 text-left">Items</th>
                    <th className="py-3 px-6 text-center">Total Amount</th>
                    <th className="py-3 px-6 text-center">Shipping Address</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                    <th className="py-3 px-6 text-center">
                      {console.log("this is orders -->", orders)}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {orders.data &&
                    orders.data.map((order) => (
                      <tr className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2"></div>
                            <span className="font-medium">{order.id}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          {order.items.map((item) => (
                            <div className="flex items-center">
                              <div className="mr-2">
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={item[0].thumbnail}
                                />
                              </div>
                              <span>
                                {item[0].title} - #{item.quantity} - $
                                {item[0].price}
                              </span>
                            </div>
                          ))}
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex items-center justify-center">
                            ${order.totalAmount}
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="">
                            <div>
                              <strong>{order.selectedAddress.name}</strong>,
                            </div>
                            <div>{order.selectedAddress.street},</div>
                            <div>{order.selectedAddress.city},</div>
                            <div>{order.selectedAddress.state},</div>
                            <div>{order.selectedAddress.pinCode},</div>
                            <div>{order.selectedAddress.phone}</div>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          {order.id === editableOrderId ? (
                            <select onChange={(e) => handleUpdate(e, order)}>
                              <option value="pending">Pending</option>
                              <option value="dispatched">Dispatched</option>
                              <option value="delivered">Delivered</option>
                              <option value="cancelled">Cancelled</option>
                            </select>
                          ) : (
                            <span
                              className={`${chooseColor(
                                order.status
                              )} py-1 px-3 rounded-full text-xs`}
                            >
                              {order.status}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <div className="w-6 mr-2 transform cursor-pointer mx-1 hover:text-purple-500 hover:scale-110">
                              <EyeIcon
                                onClick={(e) => handleShow(order)}
                              ></EyeIcon>
                            </div>
                            <div className="w-6 mr-2 transform cursor-pointer mx-1 hover:text-purple-500 hover:scale-110">
                              <PencilIcon
                                onClick={(e) => handleEdit(order)}
                              ></PencilIcon>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pagination
          page={page}
          totalItems={totalOrders}
          handlePage={handlePage}
        ></Pagination>
      </div>
    </>
  );
}

export default AdminOrders;
