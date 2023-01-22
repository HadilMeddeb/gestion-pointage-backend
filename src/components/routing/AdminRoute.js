import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (<div>

        <Route
            {...rest}
            render={
                (props) => 
                
                    (localStorage.getItem("authToken")&&(JSON.parse(localStorage.getItem("current_user")).__t=="Admin")) ? (<Component {...props} />) : (<Redirect to="/login" />)
                
            }
        />

    </div>)
}
export default PrivateRoute;