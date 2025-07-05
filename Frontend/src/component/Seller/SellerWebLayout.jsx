import React from "react";
import SellerHeaderComponent from "./SellerDashboard/SellerHeaderComponent";
import SellerSidebarComponent from "./SellerDashboard/SellerSidebarComponent";
import SellerFooterComponent from "./SellerDashboard/SellerFooterComponent";


const SellerWebLayout = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <SellerHeaderComponent/>
        <div className="d-flex flex-grow-1">
          <SellerSidebarComponent/>
          <main className="flex-grow-1 p-4 bg-light">{children}</main>
        </div>
        <SellerFooterComponent/>
      </div>
    </>
  );
};

export default SellerWebLayout;
