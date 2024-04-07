import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Children = ReactNode;

const ProtectedRoute = ({ children }: { children: Children }) => {
  const isUser = sessionStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUser) {
      navigate("/");
    }
  }),
    [isUser];
  return children;
};

export default ProtectedRoute;
