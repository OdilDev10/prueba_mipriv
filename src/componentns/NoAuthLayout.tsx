import { Card } from "antd";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const NoAuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("token_mipriv") ||
      localStorage.getItem("token_mipriv") !== undefined ||
      localStorage.getItem("token_mipriv") !== null ||
      localStorage.getItem("token_mipriv") !== "" ||
      localStorage.getItem("token_mipriv")?.length
    ) {
      navigate("/login");
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
        style={{
          width: "60%",
          padding: "30px",
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
