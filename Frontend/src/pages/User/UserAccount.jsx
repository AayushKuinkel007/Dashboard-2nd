import React, { useContext, useEffect, useState } from "react";
import WeblayoutComponent from "../../component/Admin/WeblayoutComponent";
import { AuthContext } from "../../auth/Authcontext";
import pfp from "../../assets/react.svg";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
const UserAccount = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <>
          <WeblayoutComponent>
            <div>
              <h3>Account Details</h3>
              <div className="container mt-3 mb-3">
                <img src={pfp} alt="" />
              </div>
              <div className="container mb-3">
                <h4>
                  Name:
                  <strong className="ms-2">
                    {user.fname}
                    {user.lname}
                  </strong>
                </h4>
                <h4>
                  Email:
                  <strong className="ms-2">{user.email}</strong>
                </h4>
              </div>
              <div className="container mb-3">
                <button className="btn btn-success">Change Password</button>
              </div>
            </div>
          </WeblayoutComponent>
        </>
      )}
    </>
  );
};

export default UserAccount;
