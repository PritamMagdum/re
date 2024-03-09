import React, { useState, Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteItemFromCartAsync,
  fetchItemsByUserIdAsync,
  selectCartLoaded,
  selectCartStatus,
  selectItems,
  updateCartAsync,
} from "./cartSlice";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";
import { fetchItemsByUserId } from "./cartAPI";
import { selectLoggedInUser } from "../auth/authSlice";
import { Grid } from "react-loader-spinner";
import Modal from "../common/Modal";
import { useAlert } from "react-alert";

export default function Cart() {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const items = useSelector(selectItems);
  const user = useSelector(selectLoggedInUser);
  const cartLoaded = useSelector(selectCartLoaded);
  const status = useSelector(selectCartStatus);
  const [openModal, setOpenModal] = useState(null);
  const alert = useAlert();
  // console.log("Items are -> ",items);

  // const totalAmount = items.reduce(async(total, item) => {
  //   const itemTotal = await item.product.reduce((acc, product) => acc + (product.price * item.quantity), 0);
  //   return total + itemTotal;
  // }, 0);
  // console.log("items is -->", items);
  const totalAmount = items.reduce(
    (amount, item) =>
      Math.round(
        item.product.price *
          (1 - item.product.discountPercentage / 100) *
          item.quantity +
          amount
      ),
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const handleQuantity = (e, item) => {
    // console.log("e is ->",e.target.value)
    // console.log("item is -> ",item)
    dispatch(updateCartAsync({ id: item.id, quantity: +e.target.value }));
    // dispatch(fetchItemsByUserIdAsync(user.id));
  };

  const handleRemove = (e, id) => {
    dispatch(deleteItemFromCartAsync(id));
    setTimeout(() => {
      dispatch(fetchItemsByUserIdAsync(user.id));
    }, 50);
  };

  return (
    <div>
      {!items.length && cartLoaded && (
        <Navigate to="/" replace={true}></Navigate>
      )}

      <div className="mx-auto max-w-7xl px-4 bg-white sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight my-5 text-gray-900">
            Cart
          </h1>
          <hr className="my-5" />
          <div className="flow-root">
            {status === "loading" ? (
              <Grid
                visible={true}
                height="200"
                width="200"
                color="#1f2937"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass="grid-wrapper"
              />
            ) : null}
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {items[0] &&
                items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={item.product.id}>{item.product.title}</a>
                          </h3>
                          <p className="ml-4">
                            $
                            {Math.round(
                              item.product.price *
                                (1 - item.product.discountPercentage / 100)
                            )}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.product.brand}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty
                            {/* {console.log(items)} */}
                          </label>
                          <select
                            onChange={(e) => handleQuantity(e, item)}
                            value={item.quantity}
                            className="py-1 border-inherit mx-2 rounded-md "
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>

                        <div className="flex">
                          <Modal
                            title={`Delete ${item.title}`}
                            message="Are you sure want to delete this Cart Item ?"
                            dangerOption="Delete"
                            cancelOption="Cancel"
                            cancelAction={() => setOpenModal(null)}
                            dangerAction={(e) => handleRemove(e, item.id)}
                            showModal={openModal === item.id}
                          ></Modal>
                          <button
                            onClick={(e) => {
                              setOpenModal(item.id);
                            }}
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 my-3">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${totalAmount}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900 my-3">
            <p>Total Items in Cart</p>
            <p>{totalItems}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              to="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <Link to="/">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  onClick={() => setOpen(false)}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
