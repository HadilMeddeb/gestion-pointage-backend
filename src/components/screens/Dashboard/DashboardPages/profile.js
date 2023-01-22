import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import history from '../../../../history';

export default function Profile()
{
	useEffect(() => {
        if (!localStorage.getItem("authToken")) {
            history.push("/login")
        }
    },[])
    return(
   <>
   
   <div className="page-header">
					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="title">
								<h4>Profile</h4>
							</div>
							<nav aria-label="breadcrumb" role="navigation">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/dashboard/home">Home</Link></li>
									<li className="breadcrumb-item active" aria-current="page">Profile</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
						<div className="pd-20 card-box height-100-p">
							<div className="profile-photo">
								<a href="modal" data-toggle="modal" data-target="#modal" className="edit-avatar"><i className="fa fa-pencil"></i></a>
								<img src="/vendors/images/photo1.jpg" alt="" className="avatar-photo"/>
								<div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
									<div className="modal-dialog modal-dialog-centered" role="document">
										<div className="modal-content">
											<div className="modal-body pd-5">
												<div className="img-container">
													<img id="image" src="/vendors/images/photo2.jpg" alt="Picture"/>
												</div>
											</div>
											<div className="modal-footer">
												<input type="submit" value="Update" className="btn btn-primary"/>
												<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<h5 className="text-center h5 mb-0">Ross C. Lopez</h5>
							<p className="text-center text-muted font-14">Lorem ipsum dolor sit amet</p>
							<div className="profile-info">
								<h5 className="mb-20 h5 text-blue">Contact Information</h5>
								<ul>
									<li>
										<span>Email Address:</span>
										FerdinandMChilds@test.com
									</li>
									<li>
										<span>Phone Number:</span>
										619-229-0054
									</li>
									<li>
										<span>Country:</span>
										America
									</li>
									<li>
										<span>Address:</span>
										1807 Holden Street<br/>
										San Diego, CA 92115
									</li>
								</ul>
							</div>
							<div className="profile-social">
								<h5 className="mb-20 h5 text-blue">Social Links</h5>
								<ul className="clearfix">
									<li><a href="#" className="btn" data-bgcolor="#3b5998" data-color="#ffffff"><i className="fa fa-facebook"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#1da1f2" data-color="#ffffff"><i className="fa fa-twitter"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#007bb5" data-color="#ffffff"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#f46f30" data-color="#ffffff"><i className="fa fa-instagram"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#c32361" data-color="#ffffff"><i className="fa fa-dribbble"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#3d464d" data-color="#ffffff"><i className="fa fa-dropbox"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#db4437" data-color="#ffffff"><i className="fa fa-google-plus"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#bd081c" data-color="#ffffff"><i className="fa fa-pinterest-p"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#00aff0" data-color="#ffffff"><i className="fa fa-skype"></i></a></li>
									<li><a href="#" className="btn" data-bgcolor="#00b489" data-color="#ffffff"><i className="fa fa-vine"></i></a></li>
								</ul>
							</div>
							<div className="profile-skills">
								<h5 className="mb-20 h5 text-blue">Key Skills</h5>
								<h6 className="mb-5 font-14">HTML</h6>
								<div className="progress mb-20" style={{height: "6px"}}>
									<div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<h6 className="mb-5 font-14">Css</h6>
								<div className="progress mb-20" style={{height: "6px"}}>
									<div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<h6 className="mb-5 font-14">jQuery</h6>
								<div className="progress mb-20" style={{height: "6px"}}>
									<div className="progress-bar" role="progressbar" style={{width: "60%"}}aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
								<h6 className="mb-5 font-14">Bootstrap</h6>
								<div className="progress mb-20" style={{height: "6px"}}>
									<div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
						<div className="card-box height-100-p overflow-hidden">
							<div className="profile-tab height-100-p">
								<div className="tab height-100-p">
									<ul className="nav nav-tabs customtab" role="tablist">
										<li className="nav-item">
											<a className="nav-link active" data-toggle="tab" href="#timeline" role="tab">Timeline</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#tasks" role="tab">Tasks</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#setting" role="tab">Settings</a>
										</li>
									</ul>
									<div className="tab-content">
				
										<div className="tab-pane fade show active" id="timeline" role="tabpanel">
											<div className="pd-20">
												<div className="profile-timeline">
													<div className="timeline-month">
														<h5>August, 2020</h5>
													</div>
													<div className="profile-timeline-list">
														<ul>
															<li>
																<div className="date">12 Aug</div>
																<div className="task-name"><i className="ion-android-alarm-clock"></i> Task Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
															<li>
																<div className="date">10 Aug</div>
																<div className="task-name"><i className="ion-ios-chatboxes"></i> Task Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
															<li>
																<div className="date">10 Aug</div>
																<div className="task-name"><i className="ion-ios-clock"></i> Event Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
															<li>
																<div className="date">10 Aug</div>
																<div className="task-name"><i className="ion-ios-clock"></i> Event Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
														</ul>
													</div>
													<div className="timeline-month">
														<h5>July, 2020</h5>
													</div>
													<div className="profile-timeline-list">
														<ul>
															<li>
																<div className="date">12 July</div>
																<div className="task-name"><i className="ion-android-alarm-clock"></i> Task Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
															<li>
																<div className="date">10 July</div>
																<div className="task-name"><i className="ion-ios-chatboxes"></i> Task Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
														</ul>
													</div>
													<div className="timeline-month">
														<h5>June, 2020</h5>
													</div>
													<div className="profile-timeline-list">
														<ul>
															<li>
																<div className="date">12 June</div>
																<div className="task-name"><i className="ion-android-alarm-clock"></i> Task Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
															<li>
																<div className="date">10 June</div>
																<div className="task-name"><i className="ion-ios-chatboxes"></i> Task Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
															<li>
																<div className="date">10 June</div>
																<div className="task-name"><i className="ion-ios-clock"></i> Event Added</div>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
																<div className="task-time">09:30 am</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									
										<div className="tab-pane fade" id="tasks" role="tabpanel">
											<div className="pd-20 profile-task-wrap">
												<div className="container pd-0">

													<div className="task-title row align-items-center">
														<div className="col-md-8 col-sm-12">
															<h5>Open Tasks (4 Left)</h5>
														</div>
														<div className="col-md-4 col-sm-12 text-right">
															<a href="task-add" data-toggle="modal" data-target="#task-add" className="bg-light-blue btn text-blue weight-500"><i className="ion-plus-round"></i> Add</a>
														</div>
													</div>
													<div className="profile-task-list pb-30">
														<ul>
															<li>
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="task-1"/>
																	<label className="custom-control-label" for="task-1"></label>
																</div>
																<div className="task-type">Email</div>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ea earum.
																<div className="task-assign">Assigned to Ferdinand M. <div className="due-date">due date <span>22 February 2019</span></div></div>
															</li>
															<li>
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="task-2"/>
																	<label className="custom-control-label" for="task-2"></label>
																</div>
																<div className="task-type">Email</div>
																Lorem ipsum dolor sit amet.
																<div className="task-assign">Assigned to Ferdinand M. <div className="due-date">due date <span>22 February 2019</span></div></div>
															</li>
															<li>
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="task-3"/>
																	<label className="custom-control-label" for="task-3"></label>
																</div>
																<div className="task-type">Email</div>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit.
																<div className="task-assign">Assigned to Ferdinand M. <div className="due-date">due date <span>22 February 2019</span></div></div>
															</li>
															<li>
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="task-4"/>
																	<label className="custom-control-label" for="task-4"></label>
																</div>
																<div className="task-type">Email</div>
																Lorem ipsum dolor sit amet. Id ea earum.
																<div className="task-assign">Assigned to Ferdinand M. <div className="due-date">due date <span>22 February 2019</span></div></div>
															</li>
														</ul>
													</div>
												
													<div className="task-title row align-items-center">
														<div className="col-md-12 col-sm-12">
															<h5>Closed Tasks</h5>
														</div>
													</div>
													<div className="profile-task-list close-tasks">
														<ul>
															<li>
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="task-close-1" checked="" disabled=""/>
																	<label className="custom-control-label" for="task-close-1"></label>
																</div>
																<div className="task-type">Email</div>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ea earum.
																<div className="task-assign">Assigned to Ferdinand M. <div className="due-date">due date <span>22 February 2018</span></div></div>
															</li>
															<li>
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="task-close-2" checked="" disabled=""/>
																	<label className="custom-control-label" for="task-close-2"></label>
																</div>
																<div className="task-type">Email</div>
																Lorem ipsum dolor sit amet.
																<div className="task-assign">Assigned to Ferdinand M. <div className="due-date">due date <span>22 February 2018</span></div></div>
															</li>
															<li>
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="task-close-3" checked="" disabled=""/>
																	<label className="custom-control-label" for="task-close-3"></label>
																</div>
																<div className="task-type">Email</div>
																Lorem ipsum dolor sit amet, consectetur adipisicing elit.
																<div className="task-assign">Assigned to Ferdinand M. <div className="due-date">due date <span>22 February 2018</span></div></div>
															</li>
															<li>
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="task-close-4" checked="" disabled=""/>
																	<label className="custom-control-label" for="task-close-4"></label>
																</div>
																<div className="task-type">Email</div>
																Lorem ipsum dolor sit amet. Id ea earum.
																<div className="task-assign">Assigned to Ferdinand M. <div className="due-date">due date <span>22 February 2018</span></div></div>
															</li>
														</ul>
													</div>
											
													<div className="modal fade customscroll" id="task-add" tabindex="-1" role="dialog">
														<div className="modal-dialog modal-dialog-centered" role="document">
															<div className="modal-content">
																<div className="modal-header">
																	<h5 className="modal-title" id="exampleModalLongTitle">Tasks Add</h5>
																	<button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Close Modal">
																		<span aria-hidden="true">&times;</span>
																	</button>
																</div>
																<div className="modal-body pd-0">
																	<div className="task-list-form">
																		<ul>
																			<li>
																				<form>
																					<div className="form-group row">
																						<label className="col-md-4">Task Type</label>
																						<div className="col-md-8">
																							<input type="text" className="form-control"/>
																						</div>
																					</div>
																					<div className="form-group row">
																						<label className="col-md-4">Task Message</label>
																						<div className="col-md-8">
																							<textarea className="form-control"></textarea>
																						</div>
																					</div>
																					<div className="form-group row">
																						<label className="col-md-4">Assigned to</label>
																						<div className="col-md-8">
																							<select className="selectpicker form-control" data-style="btn-outline-primary" title="Not Chosen" multiple="" data-selected-text-format="count" data-count-selected-text= "{0} people selected">
																								<option>Ferdinand M.</option>
																								<option>Don H. Rabon</option>
																								<option>Ann P. Harris</option>
																								<option>Katie D. Verdin</option>
																								<option>Christopher S. Fulghum</option>
																								<option>Matthew C. Porter</option>
																							</select>
																						</div>
																					</div>
																					<div className="form-group row mb-0">
																						<label className="col-md-4">Due Date</label>
																						<div className="col-md-8">
																							<input type="text" className="form-control date-picker"/>
																						</div>
																					</div>
																				</form>
																			</li>
																			<li>
																				<a href="javascript:;" className="remove-task"  data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Remove Task"><i className="ion-minus-circled"></i></a>
																				<form>
																					<div className="form-group row">
																						<label className="col-md-4">Task Type</label>
																						<div className="col-md-8">
																							<input type="text" className="form-control"/>
																						</div>
																					</div>
																					<div className="form-group row">
																						<label className="col-md-4">Task Message</label>
																						<div className="col-md-8">
																							<textarea className="form-control"></textarea>
																						</div>
																					</div>
																					<div className="form-group row">
																						<label className="col-md-4">Assigned to</label>
																						<div className="col-md-8">
																							<select className="selectpicker form-control" data-style="btn-outline-primary" title="Not Chosen" multiple="" data-selected-text-format="count" data-count-selected-text= "{0} people selected">
																								<option>Ferdinand M.</option>
																								<option>Don H. Rabon</option>
																								<option>Ann P. Harris</option>
																								<option>Katie D. Verdin</option>
																								<option>Christopher S. Fulghum</option>
																								<option>Matthew C. Porter</option>
																							</select>
																						</div>
																					</div>
																					<div className="form-group row mb-0">
																						<label className="col-md-4">Due Date</label>
																						<div className="col-md-8">
																							<input type="text" className="form-control date-picker"/>
																						</div>
																					</div>
																				</form>
																			</li>
																		</ul>
																	</div>
																	<div className="add-more-task">
																		<a href="#" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Add Task"><i className="ion-plus-circled"></i> Add More Task</a>
																	</div>
																</div>
																<div className="modal-footer">
																	<button type="button" className="btn btn-primary">Add</button>
																	<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
																</div>
															</div>
														</div>
													</div>
												
												</div>
											</div>
										</div>
								
										<div className="tab-pane fade height-100-p" id="setting" role="tabpanel">
											<div className="profile-setting">
												<form>
													<ul className="profile-edit-list row">
														<li className="weight-500 col-md-6">
															<h4 className="text-blue h5 mb-20">Edit Your Personal Setting</h4>
															<div className="form-group">
																<label>Full Name</label>
																<input className="form-control form-control-lg" type="text"/>
															</div>
															<div className="form-group">
																<label>Title</label>
																<input className="form-control form-control-lg" type="text"/>
															</div>
															<div className="form-group">
																<label>Email</label>
																<input className="form-control form-control-lg" type="email"/>
															</div>
															<div className="form-group">
																<label>Date of birth</label>
																<input className="form-control form-control-lg date-picker" type="text"/>
															</div>
															<div className="form-group">
																<label>Gender</label>
																<div className="d-flex">
																<div className="custom-control custom-radio mb-5 mr-20">
																	<input type="radio" id="customRadio4" name="customRadio" className="custom-control-input"/>
																	<label className="custom-control-label weight-400" for="customRadio4">Male</label>
																</div>
																<div className="custom-control custom-radio mb-5">
																	<input type="radio" id="customRadio5" name="customRadio" className="custom-control-input"/>
																	<label className="custom-control-label weight-400" for="customRadio5">Female</label>
																</div>
																</div>
															</div>
															<div className="form-group">
																<label>Country</label>
																<select className="selectpicker form-control form-control-lg" data-style="btn-outline-secondary btn-lg" title="Not Chosen">
																	<option>United States</option>
																	<option>India</option>
																	<option>United Kingdom</option>
																</select>
															</div>
															<div className="form-group">
																<label>State/Province/Region</label>
																<input className="form-control form-control-lg" type="text"/>
															</div>
															<div className="form-group">
																<label>Postal Code</label>
																<input className="form-control form-control-lg" type="text"/>
															</div>
															<div className="form-group">
																<label>Phone Number</label>
																<input className="form-control form-control-lg" type="text"/>
															</div>
															<div className="form-group">
																<label>Address</label>
																<textarea className="form-control"></textarea>
															</div>
															<div className="form-group">
																<label>Visa Card Number</label>
																<input className="form-control form-control-lg" type="text"/>
															</div>
															<div className="form-group">
																<label>Paypal ID</label>
																<input className="form-control form-control-lg" type="text"/>
															</div>
															<div className="form-group">
																<div className="custom-control custom-checkbox mb-5">
																	<input type="checkbox" className="custom-control-input" id="customCheck1-1"/>
																	<label className="custom-control-label weight-400" for="customCheck1-1">I agree to receive notification emails</label>
																</div>
															</div>
															<div className="form-group mb-0">
																<input type="submit" className="btn btn-primary" value="Update Information"/>
															</div>
														</li>
														<li className="weight-500 col-md-6">
															<h4 className="text-blue h5 mb-20">Edit Social Media links</h4>
															<div className="form-group">
																<label>Facebook URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Twitter URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Linkedin URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Instagram URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Dribbble URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Dropbox URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Google-plus URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Pinterest URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Skype URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group">
																<label>Vine URL:</label>
																<input className="form-control form-control-lg" type="text" placeholder="Paste your link here"/>
															</div>
															<div className="form-group mb-0">
																<input type="submit" className="btn btn-primary" value="Save & Update"/>
															</div>
														</li>
													</ul>
												</form>
											</div>
										</div>
									
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
   
   </>
     


    );
}