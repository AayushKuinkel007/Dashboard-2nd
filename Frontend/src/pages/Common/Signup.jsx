import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../../slices/user/signupActions";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import Navbar from "../../component/Common/Navbar";
import { AuthContext } from "../../auth/Authcontext"; // 🔥 Added

const Signup = () => {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    dateofbirth: "",
    email: "",
    password: "",
    role: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, user } = useContext(AuthContext); // 🔥 Context values

  const { loading, error, success } = useSelector(
    (state) => state.signedDataShow
  );

  // Auto redirect if already logged in
  useEffect(() => {
    if (token && user) {
      navigate(`/${user.role}`);
    }
  }, [token, user, navigate]);

  // Screen loader
  useEffect(() => {
    const timer = setTimeout(() => setLoadingScreen(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.role) {
      toast.error("Please select a role.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    dispatch(signupUser(formData));
  };

  useEffect(() => {
    if (success) {
      toast.success("Signup Successful!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });

      setFormData({
        fname: "",
        lname: "",
        dateofbirth: "",
        email: "",
        password: "",
        role: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }

    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  }, [success, error, navigate]);

  return (
    <>
      <ToastContainer />
      {loadingScreen ? (
        <LoadingComponent />
      ) : (
        <>
          <Navbar />
          <div className="container">
            <div className="row mt-3">
              <h3 className="text-center">Signup</h3>
              <div className="col-md-6 offset-md-3">
                <form
                  className="border border-black rounded p-3"
                  onSubmit={handleSubmit}
                >
                  <div className="d-flex">
                    <input
                      type="text"
                      name="fname"
                      placeholder="First Name"
                      className="form-control mb-2"
                      value={formData.fname}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="text"
                      name="lname"
                      placeholder="Last Name"
                      className="form-control mb-2 ms-2"
                      value={formData.lname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type="date"
                    name="dateofbirth"
                    className="form-control mb-2"
                    value={formData.dateofbirth}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control mb-2"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control mb-2"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="role"
                    className="form-select mb-3"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      -- Select Role --
                    </option>
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                  </select>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-lg btn-dark"
                      disabled={loading}
                    >
                      {loading ? "Signing up..." : "Signup"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Signup;
