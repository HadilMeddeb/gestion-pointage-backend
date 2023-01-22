import React from 'react';
import {Link} from 'react-router-dom';

export default function LeftSidebar() {
	const getCurrentUserRole=()=>{
		console.log("current user role :",JSON.parse(localStorage.getItem("current_user")).__t)
		 return JSON.parse(localStorage.getItem("current_user")).__t
	}

	return (

		<div className="left-side-bar" style={{background: "#38434d"}}>
			<div className="brand-logo" style={{background:"#ffffff",padding:"30px",marginBottom:"60px",boxShadow:"2px rgba(0,0,0,0.3)"}}>
				<a href="/">
					<img src="/vendors/images/Acoba_Logo.png" alt="" className="light-logo" style={{width:"150px",height:"auto"}}/>
				</a>
				<div className="close-sidebar" data-toggle="left-sidebar-close">
					<i className="ion-close-round"></i>
				</div>
			</div>

			<div className="menu-block customscroll">
				<div className="sidebar-menu">
					<ul id="accordion-menu">
						{ getCurrentUserRole() =="Admin" ? <li>
							<Link  to="/dashboard/home" className="dropdown-toggle">
								<span className="micon dw dw-house-1"></span><span className="mtext">Home</span>
							</Link>
						</li>:null}
						<li className="dropdown">
							<Link to="/dashboard/profile" className="dropdown-toggle">

								<span className="micon fa fa-user-circle-o"></span><span className="mtext">Profile</span>
							</Link>
						</li>
						{ getCurrentUserRole()=="Admin" ?<li className="dropdown">
							<Link to="/dashboard/employees" className="dropdown-toggle">
								<span className="micon dw dw-library"></span><span className="mtext">Employees</span>
							</Link>
						</li> :null}

					   { getCurrentUserRole()=="Admin" ? <li className="dropdown">
							<Link to="/dashboard/departements" className="dropdown-toggle">
								<span className="micon dw dw-library"></span><span className="mtext">Departements</span>
							</Link>
						</li> :null}

						<li>
							<div className="dropdown-divider"></div>
						</li>
						<li>
							<div className="sidebar-small-cap">Extra</div>
						</li>

						<li>
							<Link to="/dashboard/Calendar" className="dropdown-toggle">
								<span className="micon dw dw-edit-2"></span><span className="mtext">Calendar</span>
							</Link>
						</li>
						{getCurrentUserRole()=="Admin" ?  <li>
							<Link to="/dashboard/sendmail" className="dropdown-toggle">
								<span className="micon dw dw-edit-2"></span><span className="mtext">Send email</span>
							</Link>
						</li> :null}

					</ul>
				</div>
			</div>
		</div>



	);
}
