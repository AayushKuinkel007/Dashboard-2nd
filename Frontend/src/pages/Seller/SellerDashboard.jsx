import React, { useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import SellerWebLayout from "../../component/Seller/SellerWebLayout";

const SellerDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    productImg: "",
    productName: "",
    productDescription: "",
    productAvailability: "",
    productPrice: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product:", formData);
    // Add product submission logic here (e.g., send to backend)
    setShowModal(false);
    setFormData({
      productImg: "",
      productName: "",
      productDescription: "",
      productAvailability: "",
      productPrice: "",
    });
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <SellerWebLayout>
          <h2 className="text-center" style={{ textDecoration: "underline" }}>
            Seller Dashboard
          </h2>
          <div className="container">
            <div className="d-flex justify-content-center w-100">
              <div className="mt-4 border border-dark rounded w-25">
                <h4 className="text-center">Insights</h4>
                <ul>
                  <li className="fs-5"><strong>Views:</strong> 1000</li>
                  <li className="fs-5"><strong>Likes:</strong> 1000</li>
                </ul>
              </div>
              <div className="mt-4 ms-4 border border-dark rounded w-25">
                <h4 className="text-center">Highlights</h4>
                <ul>
                  <li className="fs-5"><strong>New Followers:</strong> 1000</li>
                  <li className="fs-5"><strong>Average Views:</strong> 1000</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Add New Product Button */}
          <div className="text-center mt-4">
            <button className="btn btn-dark" onClick={() => setShowModal(true)}>
              Add New Product
            </button>
          </div>

          {/* Modal */}
          {showModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "30px",
                  borderRadius: "10px",
                  width: "400px",
                  position: "relative",
                }}
              >
                <h4 className="mb-3">Add New Product</h4>

                <form className="form" onSubmit={handleSubmit}>
                  <label htmlFor="productImg" className="form-label">
                    Product Image
                  </label>
                  <input
                    type="text"
                    name="productImg"
                    id="productImg"
                    value={formData.productImg}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />

                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />

                  <label htmlFor="productDescription" className="form-label">
                    Product Description
                  </label>
                  <input
                    type="text"
                    name="productDescription"
                    id="productDescription"
                    value={formData.productDescription}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />

                  <label htmlFor="productAvailability" className="form-label">
                    Product Availability
                  </label>
                  <input
                    type="text"
                    name="productAvailability"
                    id="productAvailability"
                    value={formData.productAvailability}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />

                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="text"
                    name="productPrice"
                    id="productPrice"
                    value={formData.productPrice}
                    onChange={handleChange}
                    className="form-control mb-3"
                  />

                  <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark">
                      Add
                    </button>
                  </div>
                </form>

                <button
                  className="btn btn-danger"
                  onClick={() => setShowModal(false)}
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </SellerWebLayout>
      )}
    </>
  );
};

export default SellerDashboard;
