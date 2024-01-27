import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
      navigate("/dashboard");
  }, []);

  return <div>

  </div>;
};
