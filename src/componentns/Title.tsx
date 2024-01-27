import React from "react";
import { useAppContext } from "../context/AppContext";

const Title = ({
  title,
  fontSize,
}: {
  title: string | React.ReactNode;
  fontSize?: string;
}) => {

  const { isDarkMode } = useAppContext();

  return (
    <h1
      style={{
        fontSize: fontSize || "38px",
        color: isDarkMode ? "white" : "black"
      }}
    >
      {title}
    </h1>
  );
};

export default Title;
