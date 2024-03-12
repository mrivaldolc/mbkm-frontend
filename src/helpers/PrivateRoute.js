/* eslint-disable react-hooks/exhaustive-deps */
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const navigate = useHistory();
  const { keycloak } = useKeycloak();

  useEffect(() => {
    if (!keycloak.authenticated) {
      navigate("/");
    }
  }, []);
  return children;
};

export default PrivateRoute;

// import { useHistory } from 'react-router-dom';

// function PrivateRoute({ children, ...rest }) {
//   const history = useHistory();

//   // Example usage of useHistory for navigation
//   const handleNavigate = () => {
//     history.push('/some-route');
//   };

//   // Rest of your PrivateRoute component logic
// }

// export default PrivateRoute;
