import React, { useEffect, useState } from "react";
import Navbar from "../../component/Common/Navbar";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import { useDispatch, useSelector } from "react-redux";
import { sum} from "../../slices/user/cartSlice";

const ProductDetail = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  const [quantity, setquantity] = useState(0);
  const addquantity = () => [setquantity(quantity + 1)];
  const subquantity = () => [setquantity(quantity - 1)];

  const data = useSelector((state) => state.productDetail.productDetails);

  const sendCartData = (product)=>{
    dispatch(sum(1))
  }
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Navbar />
          <div className="container shadow-lg">
            <div className="row my-3">
              <div className="col-md-6 my-3">
                <img src={data.img} style={{ width: "30rem" }} />
              </div>
              <div className="col-md-6 my-3">
                <h1>{data.name}</h1>
                <h3>{data.price}</h3>
                <h3>{data.ontock}</h3>
                <p>{data.specifications}</p>
                <div className="p-3">
                  <h3>No. Items,</h3>
                  <div className="d-flex justify-content-start">
                    <button
                      className="btn btn-dark me-2"
                      onClick={addquantity}
                    >
                      +
                    </button>
                    <h5 className="shadow-lg">{quantity}</h5>
                    <button
                      className={`btn ms-2 ${
                        quantity > 0
                          ? "btn-dark"
                          : "btn-dark disabled"
                      }`}
                      onClick={subquantity}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="p-3 d-flex justify-content-start mt-2">
                  <button className="btn btn-dark">Buy Now</button>
                  <button className="ms-3 btn btn-dark" onClick={sendCartData}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
