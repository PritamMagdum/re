import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "../userSlice";

export default function UserProfile() {
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    console.log("handleEdit is Clicked");
  };

  const handleRemove = (e) => {
    console.log("handleRemove is Clicked");
  };

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
          {user.addresses.map((address, index) => (
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

              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <button
                  onClick={(e) => handleEdit(e, index)}
                  className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white my-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => handleRemove(e, index)}
                  className="inline-flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 focus:outline-none rounded-xl hover:rounded-3xl my-0.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
