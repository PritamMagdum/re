import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";
export default function UserProfile() {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 bg-white sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight my-3 text-gray-900">
            Name : {user.name ? user.name : "Hello User"}
          </h1>
          <h3 className="text-xl font-bold tracking-tight my-2 text-red-500">
            Email Address : {user.email}
          </h3>
          <hr className="my-5" />
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6 my-3">
          <p className="mt-0.5 text-sm text-gray-500">Your Addresses :</p>
          {user.addresses.map((address) => (
            <div className="flex justify-between gap-x-6 py-5 border-2 px-2 border-gray-200 rounded-md my-1">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.email}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.street} - {address.pinCode}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Phone: {address.phone}
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {address.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
