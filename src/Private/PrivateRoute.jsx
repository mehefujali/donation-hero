import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lodaer from "../components/Lodaer";


const PrivateRoute = ({children}) => {
      const {pathname} = useLocation()
      const {user,loading} = useContext(AuthContext)
      if(user){
      return children
      }
      if(loading){
            return <Lodaer></Lodaer>
      }
      return <Navigate state={pathname} to='/auth/login'></Navigate>
      
};

export default PrivateRoute;