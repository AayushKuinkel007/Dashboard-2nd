import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/Authcontext"; // Adjust path as per your structure
import reactsvg from '../../assets/react.svg'

const Navbar = () => {
  const { user, token } = useContext(AuthContext);

  return (
    <div className="container-fluid p-2 bg-dark">
      <div className="row align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <h3 className="text-light m-0">Img</h3>
        </div>

        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <ul className="d-flex justify-content-center m-0 p-0">
            <li className="ms-5" style={{ listStyle: "none" }}>
              <Link className="text-light" to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </li>
            <li className="ms-5 text-light" style={{ listStyle: "none" }}>
              About us
            </li>
            <li className="ms-5 text-light" style={{ listStyle: "none" }}>
              Contact us
            </li>
          </ul>
        </div>

        <div className="col-md-4 d-flex justify-content-end align-items-center">
          {token ? (
            <Link to="/profile" className="d-flex align-items-center text-light" style={{ textDecoration: "none" }}>
              <img
                src={reactsvg}
                alt="Profile"
                style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover" }}
              />
              <span className="ms-2">{user?.fname || "Profile"}</span>
            </Link>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/signup" className="btn btn-success ms-3">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
