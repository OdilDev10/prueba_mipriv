import { Card } from "antd";
import { Outlet } from "react-router-dom";

export const NoAuthLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url('https://www.mipriv.com/img/landing/cover.png')`,
        objectFit: 'contain',
        // backgroundPosition: "top",
        backgroundPositionY: '150px'
        
        // backgroundImage: `url('https://www.mipriv.com/img/landing/store-description.png')`,

        
      }}
    >
     
      <Card
        style={{
          width: "50%",
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
