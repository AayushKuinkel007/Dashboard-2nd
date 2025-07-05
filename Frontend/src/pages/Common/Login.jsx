import React, { useEffect, useState, useContext } from "react";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/Authcontext";
import Navbar from "../../component/Common/Navbar";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { login, token, user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Auto-redirect if already authenticated
  useEffect(() => {
    if (token && user) {
      navigate(`/profile`);
    }
  }, [token, user, navigate]);

  // Simulated loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    try {
      await login({ email: formData.email, password: formData.password });

      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });

      // No need for navigate here — useEffect will handle it
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Login failed. Please try again.";
      toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
        <Navbar/>
                <div className="container">
          <div className="row mt-3">
            <h3 className="text-center">Login</h3>
            <div className="col-md-6 offset-md-3">
              <form
                className="border border-black rounded p-3"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="form-control mb-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="form-control mb-2"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-lg btn-dark">
                    Login
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

export default Login;
