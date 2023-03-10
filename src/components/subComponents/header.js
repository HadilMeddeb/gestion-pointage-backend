import React from 'react'
import {Link} from 'react-router-dom';


export default function Header (props)
{

	const logout=()=>{
		props.logout();
	}



  return(
  
      
      <div className="header" style={{backgroundColor:"#ffffff"}}>
		<div className="header-left">
			<div className="menu-icon dw dw-menu"></div>
			<div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
			<div className="header-search">
				<form>
					<div className="form-group mb-0">
						<i className="dw dw-search2 search-icon"></i>
						<input type="text" className="form-control search-input" placeholder="Search Here"/>
						<div className="dropdown">
							<a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
								<i className="ion-arrow-down-c"></i>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<div className="form-group row">
									<label className="col-sm-12 col-md-2 col-form-label">From</label>
									<div className="col-sm-12 col-md-10">
										<input className="form-control form-control-sm form-control-line" type="text"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-12 col-md-2 col-form-label">To</label>
									<div className="col-sm-12 col-md-10">
										<input className="form-control form-control-sm form-control-line" type="text"/>
									</div>
								</div>
								<div className="form-group row">
									<label className="col-sm-12 col-md-2 col-form-label">Subject</label>
									<div className="col-sm-12 col-md-10">
										<input className="form-control form-control-sm form-control-line" type="text"/>
									</div>
								</div>
								<div className="text-right">
									<button className="btn btn-primary">Search</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div className="header-right">
			<div className="dashboard-setting user-notification">
				<div className="dropdown">
					<a className="dropdown-toggle no-arrow" href="#" data-toggle="right-sidebar">
						<i className="dw dw-settings2"></i>
					</a>
				</div>
			</div>
			<div className="user-notification">
				<div className="dropdown">
					<a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
						<i className="icon-copy dw dw-notification"></i>
						<span className="badge notification-active"></span>
					</a>
					<div className="dropdown-menu dropdown-menu-right">
						<div className="notification-list mx-h-350 customscroll">
							<ul>
								<li>
									<a href="#">
										<img src="/vendors/images/img.jpg" alt=""/>
										<h3>John Doe</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/vendors/images/photo1.jpg" alt=""/>
										<h3>Lea R. Frith</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/vendors/images/photo2.jpg" alt=""/>
										<h3>Erik L. Richards</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/vendors/images/photo3.jpg" alt=""/>
										<h3>John Doe</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/vendors/images/photo4.jpg" alt=""/>
										<h3>Renee I. Hansen</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/vendors/images/img.jpg" alt=""/>
										<h3>Vicki M. Coleman</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="user-info-dropdown">
				<div className="dropdown">
					<a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
						<span className="user-icon">
							<img src="/vendors/images/photo1.jpg" alt=""/>
						</span>
						<span className="user-name">user</span>
					</a>
					<div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
						<Link className="dropdown-item" to="profile"><i className="dw dw-user1"></i> Profile</Link>
						<Link className="dropdown-item" to="profile"><i className="dw dw-settings2"></i> Setting</Link>
						<span onClick={logout} className="dropdown-item" to="/login"><i className="dw dw-logout"></i> Log Out</span>
					</div>
				</div>
			</div>
		
		</div>
	</div>
      
      
  
  );
}