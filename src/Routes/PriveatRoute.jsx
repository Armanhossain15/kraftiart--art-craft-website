import {  useContext } from "react";
import { authContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PriveatRoute = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation()
    console.log(location.pathname)
    if(loading){
       return <div className="text-center py-5">
        <span className="loading loading-dots loading-lg"></span>
       </div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PriveatRoute.propTypes ={
    children: PropTypes.node
}
export default PriveatRoute;