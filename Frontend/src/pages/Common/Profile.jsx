import React, { useContext, useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import reactsvg from "../../assets/react.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/Authcontext";
import Navbar from "../../component/Common/Navbar";
const Profile = () => {
  const [loading, setLoading] = useState(true); // ✅ Fix here
  const { user, getProfile } = useContext(AuthContext);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getProfile();
  }, []);
  console.log(user);
  return (
    <>
      {loading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <>
        <Navbar/>
          <div className="container">
            <div className="d-flex justify-content-center">
              <div className="card w-25 mt-3" style={{ width: "18rem;" }}>
                <div className="d-flex justify-content-center">
                  <img
                    src={reactsvg}
                    className="card-img-top bg-dark rounded-circle"
                    alt="..."
                    style={{ height: "15vh", width: "15vh" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Name:
                    <strong>
                      {user.fname}
                      {user.lname}
                    </strong>
                  </h5>
                  <h5 className="card-title text-center">
                    Email: <strong>{user.email}</strong>
                  </h5>
                  <div className="d-flex justify-content-center mt-3">
                    <Link
                      className="btn btn-success btn-lg"
                    >
                      Edit Profile
                    </Link>
                    <Link
                      to="/user-account"
                      className="btn btn-primary btn-lg ms-3"
                    >
                      Account Details
                    </Link>
                  </div>
                  <div className="mt-3 d-flex justify-content-center">
                    <Link to={`/${user.role}`} className="btn btn-dark">Go to Dashboard</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
