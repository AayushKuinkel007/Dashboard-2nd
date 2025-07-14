import React, { useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import Navbar from "../../component/Common/Navbar";
import { useDispatch, useSelector } from "react-redux";
import "../../css/Homepage.css";
import Searchbar from "../../component/Common/Searchbar";
import { showproductDetails } from "../../slices/common/productdetailSlice";
import { data, Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const cardData = useSelector((state) => state.productShow.products);

  const productDetails = (product) => {
    dispatch(showproductDetails(product));
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Navbar />
          <Searchbar />
          <div className="container mt-4">
            <div className="row justify-content-center">
              {cardData &&
                cardData.map((product, index) => (
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
                            alt="..."
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
                        <button className="btn btn-dark">Add To Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Homepage;
