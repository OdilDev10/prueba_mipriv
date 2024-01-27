import React from "react";
import { useAppContext } from "../context/AppContext";

export const CustomButton = ({
  title,
  onClick,
  type,
  fontSize,
}: {
  title: string | React.ReactNode;
  type: "primary" | "transparent";
  onClick: () => void;
  fontSize?: string;
}) => {
  const {  isDarkMode } = useAppContext();

  return (
    <button
      className="custom_button_application"
      onClick={onClick}
      style={{
        borderRadius: "50px",
        background: type == "primary" ? "var(--priv-primary)" : "transparent",
        color: type == "primary" ? "#fff" : isDarkMode ? "#fff" : "#000",
        padding: "15px 20px",
        cursor: "pointer",
        outline: "none",
        border: isDarkMode && type == "transparent" ? "solid 2px #fff" : "none",
        fontWeight: "700",
        fontSize: fontSize || "1rem",
      }}
    >
      {title}
    </button>
  );
};
