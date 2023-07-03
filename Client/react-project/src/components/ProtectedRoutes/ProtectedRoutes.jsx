import { Outlet,Navigate } from "react-router-dom";

const ProtectedRoutes=()=>{
    let auth=JSON.parse(localStorage.getItem('token'))

    return (
        auth ? <Outlet/> :<Navigate to={'/'}/>
    )
}

export default ProtectedRoutes