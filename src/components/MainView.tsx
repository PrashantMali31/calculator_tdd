import React, { ReactNode } from "react";

interface MainViewProps {
  children: ReactNode;
}

const MainView: React.FC<MainViewProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f8f9fa",
        boxSizing: "border-box",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        className="calculator"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          boxSizing: "border-box",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainView;
