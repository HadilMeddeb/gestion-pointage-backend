import React from 'react';
import axios from 'axios';
import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2';
import history from '../../../../history';
export default class Departements extends React.Component {
    constructor(props) {
        super(props)
    }
    state =
        {
            departements: [],
            openAddModal: false,
            fonction: "",
            name: ""
        }
      
         config = {
            headers: {
                "Content-Type": "application/json",
            }}


   async getDepartements() {

      await  axios.get('/api/departements', this.state.newDepartement,this.config).then((res) => {
            console.log(res.data.data);
            this.setState({ departements: res.data.data });
            console.log(this.state.departements);
        }).catch((err) => { 
            console.log("error getting departements",err)
           
        })
    }

    async deleteDepartement(id) {
   
       await axios.delete('/api/departements/' + id,this.config).then((res) => {
            Swal.fire("departement deleted successfuly");
            this.getDepartements()
        })
        .catch((err) => {
             Swal.fire("error :" + err.response.data.error); 
           
            })
    }

    async AddDepartement(e) {
        e.preventDefault();
      

        await axios.post('/api/departements', { fonction: this.state.fonction, name: this.state.name },this.config)
        .then((res) => {

            this.setState({ openAddModal: false });
            Swal.fire("departement added successfully");
            this.getDepartements();
        })
        .catch((err) => {
             Swal.fire(err.response.data.error); 
              }) 
    }

    componentDidMount() {
    
        if (!localStorage.getItem("authToken")) {
            history.push("/")
        }
        this.getDepartements()
    }

    render() {

        return (
            <div className="card-box mb-30">
                <div className="pd-20">
                    <h4 className="text-blue h4">Acoba Departements</h4>
                    <button onClick={() => { this.setState({ openAddModal: true }) }} type="button" className="btn" data-bgcolor="#c32361" data-color="#ffffff" style={{ color: " rgb(255, 255, 255)", backgroundColor: "rgb(59, 89, 152)" }}>
                        <i className="fa fa-dribbble"></i> Add Departements
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
                                            <th rowSpan="1" colSpan="1" aria-label="Name">departement</th>
                                            <th tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" aria-label="Age: activate to sort column ascending">fonction</th>
                                            <th rowSpan="1" colSpan="1" aria-label="Action">Action</th></tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.departements.map((departement) => {
                                                return (
                                                    <tr role="row" className="odd" key={departement._id}>
                                                        <td className="table-plus sorting_1" tabIndex="0">{departement.name}</td>
                                                        <td>{departement.fonction}</td>
                                                        <td>
                                                            <div className="dropdown">
                                                                <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                                    <i className="dw dw-more"></i>
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                                    <button className="dropdown-item" onClick={() => { this.setState({ openModal: true }) }}><i className="dw dw-eye"></i> View</button>
                                                                    <button className="dropdown-item"><i className="dw dw-edit2"></i> Edit</button>
                                                                    <button className="dropdown-item" onClick={() => { this.deleteDepartement(departement._id) }}><i className="dw dw-delete-3"></i> Delete</button>
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

                {/*  Add Modal component */}

                <Modal show={this.state.openAddModal}>
                    <Modal.Header>
                        <Modal.Title>
                            <div className="clearfix">
                                <div className="pull-left">
                                    <h4 className=" h4">Add Forms</h4>
                                </div>
                            </div>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="pd-20 card-box mb-30">

                            <form onSubmit={(e) => { this.AddDepartement(e) }}>
                                <div className="form-group row">
                                    <label className="col-sm-12 col-md-2 col-form-label">departement  </label>
                                    <div className="col-sm-12 col-md-10">
                                        <input required className="form-control" onChange={(e) => { console.log(e.target.value); this.setState({ name: e.target.value }) }} type="text" placeholder="departement" />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-12 col-md-2 col-form-label">fonction</label>
                                    <div className="col-sm-12 col-md-10">
                                        <input required className="form-control" placeholder="(exemple)  gestion personnel" onChange={(e) => { console.log(e.target.value); this.setState({ fonction: e.target.value }) }} type="etextmail" />
                                    </div>
                                </div>
                                <input type='submit' className='btn btn-primary' value='Register' />
                                <div className="pull-right">
                                    <a onClick={() => { this.setState({ openAddModal: false }) }} className="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button">close</a>
                                </div>
                            </form>

                        </div>


                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>



            </div>
        );
    }

}















