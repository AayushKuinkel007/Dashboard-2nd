import React, { useEffect, useState } from "react";
import LoadingComponent from "../../component/Common/Dashboard/LoadingComponent";
import WeblayoutComponent from "../../component/Admin/WeblayoutComponent";

const ChangePassword = () => {
      const [loading, setLoading] = useState(true);
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


          </WeblayoutComponent>
        </>
      )}
    </>
  );
};

export default ChangePassword;
