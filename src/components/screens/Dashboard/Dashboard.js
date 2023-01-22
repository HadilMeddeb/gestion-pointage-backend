import React,{useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from "../../subComponents/header";
import LeftSidebar from "../../subComponents/leftSidebar";
import Footer from "../../subComponents/footer";
import Home from "./DashboardPages/Home";
import Calendar from "./DashboardPages/Calendar";
import Profile from "./DashboardPages/profile";
import Employees from "./DashboardPages/Employees";
import Departement from "./DashboardPages/Departements";
import SendMail from "./DashboardPages/sendMail/sendMail";
import AdminRoute from "../../routing/AdminRoute"


export default function Dashboard({history}) {


    useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            history.push("/login")
        }
    },[])



    function logoutHandler()
    {
        localStorage.removeItem("authToken");
        localStorage.removeItem("current_user");
        history.push("/login")
    }

    return (
        <>
            
            <Header logout={logoutHandler} />
            {/* <RightSidebar /> */}
            <LeftSidebar />
            <div className="mobile-menu-overlay"></div>
            <div className="main-container">
                <div className="pd-ltr-20 xs-pd-20-10">

                        <Switch>
                            <Route exact path='/dashboard/Calendar' component={Calendar} />
                            <Route exact path='/dashboard/profile' component={Profile} />
                            <AdminRoute  exact path='/dashboard/employees' component={Employees} />
                            <AdminRoute  exact path='/dashboard/departements' component={Departement} />
                            <AdminRoute  exact path='/dashboard/sendmail' component={SendMail} />
                            <AdminRoute  path='/dashboard/home' component={Home} />
                        </Switch>
                       <Footer/>
                </div>
            </div>
        </>
    );
}

