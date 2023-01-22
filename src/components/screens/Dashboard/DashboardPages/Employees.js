import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2';
import history from '../../../../history';
// import { options } from 'preact';
export default class Employees extends React.Component {

    constructor(props) {
        super(props)
    }


    state =
        {
            employees: [],
            departements: [],
            openModal: false,
            openAddModal: false,
            openUpdateModal: false,
            username: "",
            email: "",
            password: "",
            departement: "",
            num: "",
        }
        config = {
            headers: {
                "Content-Type": "application/json",
            }
        }


    async getEmployees() {

        await axios.get('/api/employee', this.config)
            .then((res) => {
                console.log(res.data.data);
                this.setState({ employees: res.data.data });
                console.log(this.state.employees);
            })
            .catch((err) => {
               console.log("error getting employees",err)
                
            })
    }


    async getDepartements() {

        await axios.get('/api/departements',this.config).then((res) => {
            console.log(res.data.data);
            this.setState({ departements: res.data.data });
            console.log(this.state.departements);
        }).catch((err) => { 
            Swal.fire("error getting departements", err);
           
        })
    }


    async onSubmit(e) {
        e.preventDefault();

        const newEmployee = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            departement: this.state.departement,
            num: this.state.num
        }

        try {
            const { data } = await axios.post('/api/employee/register', newEmployee, this.config)

            this.setState({ openAddModal: false });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "employee added successfully",
                showConfirmButton: false,
                timer: 1500
            })

            const messageText = "bonjour  votre mot de passe sur le site d'Acoba est le suivant :" + newEmployee.password
            await axios.post("/api/mails", { email: newEmployee.email, subject: "inscription info  :", text: messageText },this.config)
                .then(res => { console.log(res.data) })
                .catch((err) => { 
                    Swal.fire(" error sending message ! ", err) 
                    
            });

            this.getEmployees()
        }
        catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'error!',
                text: error.response.data.error,
            })


        }

    }


    deleteEmployee(id) {

        axios.delete('/api/employee/' + id,this.config).then((res) => {
            Swal.fire("employee deleted successfuly");
            this.getEmployees()
        }).catch((err) => {
            Swal.fire("error" + err);
           
        })
    }

    componentDidMount() {
        
        if (!localStorage.getItem("authToken")) {
            history.push("/")
        }
        this.getEmployees();
        this.getDepartements();
    }

    render() {

        return (
            <div className="card-box mb-30">

                <div className="pd-20">
                    <h4 className="text-blue h4">Acoba Employees</h4>
                    <button onClick={() => { this.setState({ openAddModal: true }) }} type="button" className="btn" data-bgcolor="#c32361" data-color="#ffffff" style={{ color: " rgb(255, 255, 255)", backgroundColor: "rgb(59, 89, 152)" }}>
                        <i className="fa fa-dribbble"></i> Add Employee
                    </button>

                </div>
                <div className="pb-20">

                    <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer"><div className="row"><div className="col-sm-12 col-md-6"><div className="dataTables_length" id="DataTables_Table_0_length"><label>Show <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="custom-select custom-select-sm form-control form-control-sm">
                        <option value="10">10</option><option value="25">25</option><option value="50">50</option>
                        <option value="-1">All</option></select> entries</label></div></div><div className="col-sm-12 col-md-6">
                            <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                <label>Search:<input type="search" className="form-control form-control-sm" placeholder="Search" aria-controls="DataTables_Table_0" />
                                </label></div></div></div><div className="row"><div className="col-sm-12"><table className="data-table table stripe hover nowrap dataTable no-footer dtr-inline" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                    <thead>
                                        <tr role="row">
                                            <th rowSpan="1" colSpan="1" aria-label="Name">num</th>
                                            <th tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Age: activate to sort column ascending">name</th>
                                            <th tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Age: activate to sort column ascending">email</th>
                                            <th tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Age: activate to sort column ascending">departement</th>
                                            <th rowSpan="1" colSpan="1" aria-label="Action">Action</th></tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.employees.map((employee) => {
                                                return (
                                                    <tr role="row" className="odd" key={employee._id}>
                                                        <td >{employee.num}</td>
                                                        <td>{employee.username}</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.departement.name}</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                    <i className="dw dw-more"></i>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                    <button className="dropdown-item" onClick={() => { this.setState({ openModal: true }) }}><i className="dw dw-eye"></i> View</button>
                                                                    <button className="dropdown-item" onClick={() => { this.setState({ openUpdateModal: true }) }}><i className="dw dw-edit2"></i> Edit</button>
                                                                    <button className="dropdown-item" onClick={() => { this.deleteEmployee(employee._id) }}><i className="dw dw-delete-3"></i> Delete</button>
                                                                </div>

                                                                {/*  view Modal */}

                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }

                                    </tbody>

                                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">1-10 of 12 entries</div>
                                </div>
                            <div className="col-sm-12 col-md-7">
                                <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                    <ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                                        <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabIndex="0" className="page-link">
                                            <i className="ion-chevron-left"></i></a></li><li className="paginate_button page-item active">
                                            <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                                        </li>
                                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabIndex="0" className="page-link">2</a></li><li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="3" tabIndex="0" className="page-link"><i className="ion-chevron-right"></i></a></li></ul></div></div></div></div>
                </div>

                {/*  view Modal component */}

                <Modal show={this.state.openModal}>
                    <Modal.Header>
                        <Modal.Title>Hi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="contact-directory-box">
                            <div className="contact-dire-info text-center">
                                <div className="contact-avatar">
                                    <span>
                                        <img src="/vendors/images/photo2.jpg" alt="" />
                                    </span>
                                </div>
                                <div className="contact-name">

                                    <h4>Wade Wilson</h4>
                                    <p>UI/UX designer</p>
                                    <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                                </div>
                                <div className="contact-skill">
                                    <span className="badge badge-pill">UI</span>
                                    <span className="badge badge-pill">UX</span>
                                    <span className="badge badge-pill">Photoshop</span>
                                    <span className="badge badge-pill badge-primary">+ 8</span>
                                </div>
                                <div className="profile-sort-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                                </div>
                            </div>
                            <div className="view-contact">
                                <a href="#">View Profile</a>
                            </div>
                        </div>



                    </Modal.Body>
                    <Modal.Footer>
                        This is the footer
                        <button onClick={() => { this.setState({ openModal: false }) }}>close</button>

                    </Modal.Footer>
                </Modal>
                {/*  Add Modal component */}

                <Modal show={this.state.openAddModal}>
                    <Modal.Header>
                        <Modal.Title>
                            <div className="clearfix">
                                <div className="pull-left">
                                    <h4 className=" h4">Add Forms</h4>
                                </div>
                            </div>
                            {this.state.error && (<span>{this.state.error}</span>)}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="pd-20 card-box mb-30">

                            <form className='form' onSubmit={(e) => this.onSubmit(e)}>
                                <div className='form-group'>
                                    <label className="col-sm-3 col-md-2 col-form-label">name</label>
                                    <input col-sm-9
                                        type='text'
                                        placeholder='Name'
                                        name='name'
                                        required
                                        onChange={(e) => this.setState({ username: e.target.value })}

                                    />
                                </div>
                                <div className='form-group'>
                                    <label className="col-sm-3 col-md-2 col-form-label">Email</label>
                                    <input col-sm-9
                                        type='email'
                                        placeholder='Email Address'
                                        name='email'
                                        required
                                        onChange={(e) => this.setState({ email: e.target.value })}

                                    />

                                </div>
                                <div className='form-group'>
                                    <label className="col-sm-3 col-md-2 col-form-label">Password</label>
                                    <input col-sm-9
                                        type='password'
                                        placeholder='Password'
                                        name='password'
                                        required
                                        onChange={(e) => this.setState({ password: e.target.value })}

                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type='Number'
                                        placeholder='num'
                                        name='num'
                                        min='0'
                                        max='200'
                                        required
                                        onChange={(e) => this.setState({ num: e.target.value })}

                                    />
                                </div>



                                <div className="form-group row">
                                    <label className="col-sm-12 col-md-3 col-form-label">Departement</label>
                                    <div className="col-sm-12 col-md-9">

                                        <select onChange={(e) => this.setState({ departement: e.target.value })} required class="custom-select col-12">
                                            <option selected  >select  departement </option>
                                            {this.state.departements.map((departement) => { return <option key={departement._id} value={departement._id}>{departement.name}</option> })}
                                        </select>
                                    </div>
                                </div>


                                <input type='submit' className='btn btn-primary' value='Register' />
                            </form>

                            {/* <form>
                                <div className="form-group row">
                                    <label className="col-sm-12 col-md-2 col-form-label">name</label>
                                    <div className="col-sm-12 col-md-10">
                                        <input required className="form-control" onChange={(e) => this.setState({ name: e.target.value })} type="text" placeholder="Johnny Brown" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-12 col-md-2 col-form-label">Email</label>
                                    <div required className="col-sm-12 col-md-10">
                                        <input className="form-control" onChange={(e) => this.setState({ email: e.target.value })} placeholder="bootstrap@example.com" type="email" />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label className="col-sm-12 col-md-2 col-form-label">Password</label>
                                    <div className="col-sm-12 col-md-10">
                                        <input required className="form-control" onChange={(e) => this.setState({ password: e.target.value })} placeholder="password" type="password" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-12 col-md-2 col-form-label">num</label>
                                    <div className="col-sm-12 col-md-10">
                                        <input required className="form-control" onChange={(e) => this.setState({ num: e.target.value })} placeholder="num" type="Number" />
                                    </div>
                                </div>



                                <div className="form-group row">
                                    <label className="col-sm-12 col-md-3 col-form-label">Departement</label>
                                    <div className="col-sm-12 col-md-9">

                                        <select onChange={(e) => this.setState({ departement: e.target.value })} class="custom-select col-12">
                                            <option value="acoba" selected  >choose</option>
                                            {this.state.departements.map((departement) => { return <option key={departement._id} value={departement._id}>{departement.name}</option> })}
                                        </select>
                                    </div>
                                </div>

                            </form> */}

                        </div>



                    </Modal.Body>
                    <Modal.Footer>
                        <div className="pull-right">
                            <a onClick={() => { this.setState({ openAddModal: false }) }} className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button">close</a>
                        </div>
                    </Modal.Footer>
                </Modal>



            </div>
        );
    }

}















