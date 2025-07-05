import React from "react";
import WeblayoutComponent from "../../component/Admin/WeblayoutComponent";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "iphone 16",
      price: "999",
    },
    {
      id: 2,
      name: "Macbok air",
      price: "1299",
    },
  ];
  return (
    <WeblayoutComponent>
      <h1>Product List</h1>
      <div>
        <div className="d-flex justify-content-end">
          <Link className="btn btn-primary btn-lg" to="/create-product">
            Add new product
          </Link>
        </div>
        <table className="table table-bordered table-striped mt-3">
          <thead className="table-dark">
            <tr className="text-center">
              <th>S.N</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-light">
            {products &&
              products.map((p, idx) => (
                <tr className="text-center" key={idx}>
                  <td>{idx + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td className="d-flex justify-content-center">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger ms-3">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </WeblayoutComponent>
  );
};

export default ProductsPage;
