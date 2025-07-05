import React, { useState } from "react";
import WeblayoutComponent from "../../component/Admin/WeblayoutComponent";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("New Product Added" + JSON.stringify(formData, null, 2));
  };
  return (
    <WeblayoutComponent>
      <h2>Create Product</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form className="form mt-4" onSubmit={handlesubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product Name"
                  className="form-control"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Product Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                  className="form-control"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      price: e.target.value,
                    })
                  }
                />
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary" type="submit">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </WeblayoutComponent>
  );
};

export default CreateProduct;
