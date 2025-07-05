import React from "react";
import SidebarComponent from "./AdminDashboard/SidebarComponent";
import FooterComponent from "./AdminDashboard/FooterComponent";
import HeaderComponent from "./AdminDashboard/HeaderComponent";

const WeblayoutComponent = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <HeaderComponent />
        <div className="d-flex flex-grow-1">
          <SidebarComponent />
          <main className="flex-grow-1 p-4 bg-light">{children}</main>
        </div>
        <FooterComponent />
      </div>
    </>
  );
};

export default WeblayoutComponent;
