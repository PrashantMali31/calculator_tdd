import React from "react";

interface LabelProps {
  text: string;
  color?: string;
}

const Label: React.FC<LabelProps> = ({ text, color = "#495057" }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        fontSize: "18px",
        textAlign: "center",
        color,
      }}
    >
      <strong>Result:</strong> {text}
    </div>
  );
};

export default Label;
