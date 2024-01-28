import { Card } from "antd";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import './NoAuthLayout.css'

export const NoAuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token_mipriv");

    if (token && token !== "undefined" && token !== null && token !== "") {
      navigate("/dashboard");
    }else{

    }
  }, [localStorage.getItem("token_mipriv")]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url('https://www.mipriv.com/img/landing/cover.png')`,
        objectFit: "contain",
        // backgroundPosition: "top",
        backgroundPositionY: "150px",

        // backgroundImage: `url('https://www.mipriv.com/img/landing/store-description.png')`,
      }}
    >
      <Card
      className="custom_card_login"
        style={{
          width: "60%",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Card>
    </div>
  );
};
