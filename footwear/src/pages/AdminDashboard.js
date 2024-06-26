import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";

function AdminDashboard() {
  const { user, isLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.userType === "User") {
      navigate("/");
    }
  }, [navigate, user]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid h-full grid-rows-[auto_1fr] gap-x-2">
      <AdminSidebar />

      <div className="md:ml-80">
        <Outlet />
      </div>
    </div>
    // <div className="ml-auto mr-auto md:w-1/2">
    //   <AdminButton name="Add Admin" onClick={() => {}} />
    //   <AdminButton name="Add Product" onClick={() => {}} />
    //   <AdminButton name="View Orders" onClick={() => {}} />
    // </div>
  );
}

export default AdminDashboard;
