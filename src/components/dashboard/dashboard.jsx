import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="main-dashboard">
      <form action="">
        <h1>I am the dashboard page...</h1>
        <button
          onClick={() => {
            localStorage.removeItem("token");
          }}
          className="btn btn-lg btn-danger btn-outline-dark"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
