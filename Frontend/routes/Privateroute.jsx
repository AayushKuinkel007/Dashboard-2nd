import { Navigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Frontend/src/auth/Authcontext';
import LoadingComponent from '../src/component/Common/Dashboard/LoadingComponent';

const PrivateRoute = ({ role, children }) => {
  const { token, user, getProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchProfile = async () => {
      if (token && !user) {
        try {
          await getProfile();
        } catch (err) {
          console.error("Failed to fetch profile:", err);
        }
      }
      setLoading(false);
    };
    fetchProfile();
  }, [token]);

  if (loading) return <LoadingComponent/>;

  // Redirect if no token
  if (!token || !user) return <Navigate to="/login" state={{ from: location }} replace />;

  // Redirect if user is already logged in but is accessing `/login`
  if (location.pathname === '/login' && token && user) {
    return <Navigate to={`/${user.role}`} replace />;
  }

  // Redirect if role mismatch
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return children;
};

export default PrivateRoute;
