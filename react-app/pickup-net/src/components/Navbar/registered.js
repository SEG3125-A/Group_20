import React from "react";
import { useLocation } from "react-router-dom";

const Registered = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  return (
    <div className="page">
      <h2>CONFIRMED</h2>
      <p>An email with confirmation has been sent to {email}.</p>
    </div>
  );
};

export default Registered;