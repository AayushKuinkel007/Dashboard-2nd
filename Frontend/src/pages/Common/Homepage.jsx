// Homepage.jsx
import React, { useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import Navbar from "../../component/Common/Navbar";
import { useDispatch, useSelector } from "react-redux";
import "../../css/Homepage.css";
import Searchbar from "../../component/Common/Searchbar";
import { showproductDetails } from "../../slices/common/productdetailSlice";
import { sum } from "../../slices/user/cartSlice";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // ⬅️ Search input state
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const cardData = useSelector((state) => state.productShow.products);

  const productDetails = (product) => {
    dispatch(showproductDetails(product));
  };

  const sendCartData = (product) => {
    dispatch(sum(1));
  };

  const filteredData = cardData?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Navbar />
          <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="container mt-4">
            <div className="row justify-content-center">
              {filteredData?.length > 0 ? (
                filteredData.map((product, index) => (
                  <div
                    className="col-md-4 d-flex justify-content-center mb-4"
                    key={index}
                  >
                    <div
                      className="card product-card p-3"
                      style={{ width: "18rem" }}
                    >
                      <Link to="/prod_details">
                        <button
                          className="border-0 bg-white"
                          onClick={() => productDetails(product)}
                        >
                          <img
                            src={product.img}
                            className="card-img-top"
                            alt={product.name}
                          />
                        </button>
                      </Link>
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">
                          Price: <strong>{product.price}</strong>
                        </p>
                        <p className="card-text">
                          OnStock: <strong>{product.onstock}</strong>
                        </p>
                      </div>
                      <div className="p-3 d-flex justify-content-center">
                        <button
                          className="btn btn-dark"
                          onClick={() => sendCartData(product)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center mt-4">No products found.</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
