import {Navigate,Route} from 'react-router-dom'

const ProtectedRoute = (props) => {
    const token = localStorage.getItem("jwtToken")
    if(token === undefined){
        return <Navigate to="/login"/>
    }
    return <Route {...props} />
}
    
export default ProtectedRoute