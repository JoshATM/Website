import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.setItem("LoggedIn", false);
    window.location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
