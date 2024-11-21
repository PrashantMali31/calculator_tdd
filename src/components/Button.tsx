import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        width: "100%",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
