import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const PrivateRouteWrapper = () => {
  const { user } = UserAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== undefined) {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [isLoading, user, navigate]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <Outlet />
  );
};

export default PrivateRouteWrapper;
