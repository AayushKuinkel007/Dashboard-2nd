import React from "react";
import UserHeaderComponent from "./UserDashboard/UserHeaderComponent";
import UserSidebarComponent from "./UserDashboard/UserSidebarComponent";
import UserFooterComponent from "./UserDashboard/UserFooterComponent";

const UserWebLayout = ({ children }) => {
  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <UserHeaderComponent/>
        <div className="d-flex flex-grow-1">
          <UserSidebarComponent/>
          <main className="flex-grow-1 p-4 bg-light">{children}</main>
        </div>
        <UserFooterComponent/>
      </div>
    </>
  );
};

export default UserWebLayout;
