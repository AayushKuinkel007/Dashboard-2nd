import React, { useEffect, useState } from "react";
import WeblayoutComponent from "../../component/Admin/WeblayoutComponent";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";

const DashboardPage = () => {
  const [loading, setLoading] = useState(true); // ✅ Fix here

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <>
          <WeblayoutComponent>
            <h2 className="text-center" style={{ textDecoration: "underline" }}>
              Admin Dashboard
            </h2>
            <div className="container">
              <div className="d-flex justify-content-center w-100">
                <div className="mt-4 border border-dark rounded w-25">
                  <h4 className="text-center">Insights</h4>
                  <div>
                    <ul>
                      <li className="fs-5">
                        <strong>Views:</strong>
                        1000
                      </li>
                      <li className="fs-5">
                        <strong>Likes:</strong>
                        1000
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 ms-4 border border-dark rounded w-25">
                  <h4 className="text-center">Highlights</h4>
                  <div>
                    <ul>
                      <li className="fs-5">
                        <strong>New Followers:</strong>
                        1000
                      </li>
                      <li className="fs-5">
                        <strong>Average Views:</strong>
                        1000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </WeblayoutComponent>
        </>
      )}
    </>
  );
};

export default DashboardPage;
