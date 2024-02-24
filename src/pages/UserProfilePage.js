import React from "react";
import Navbar from "../features/Navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserProfilePage() {
  return (
    <div>
      <Navbar>
        {/* <h1 className="text-3xl my-4 font-bold text-center text-blue-900 bg-white py-3">
          
        </h1> */}
        <UserProfile />
      </Navbar>
    </div>
  );
}

export default UserProfilePage;
