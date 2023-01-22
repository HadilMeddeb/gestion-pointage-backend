import React from 'react';
import axios from 'axios';
import { CardActions, Card, Button, CardContent, TextField, TextareaAutosize, Typography } from '@material-ui/core';
import Multiselect from 'multiselect-react-dropdown';
import './sendMail.css';
import Swal from 'sweetalert2';
import history from '../../../../../history';

export default class SendMail extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        error: "",
        employees: [],
        selectedemployees: [],
        mails: [],
        text: "",
        subject: "",
    }
   
    config={headers:{"content-Type":"application/json"}}

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees() {
        axios.get('/api/employee',this.config).then((res) => {
            console.log("employees for mail", res.data.data);
            this.setState({ employees: res.data.data });
            console.log(this.state.employees);
        }).catch((err) => { 
           Swal.fire("error getting employees", err) 
            
        })
    }

    async send(emails, subject, text) {
        try {
            const Messagedata =
            {
                emails,
                subject,
                text
            }

            console.log(Messagedata);
            await axios.post("/api/mails/many", Messagedata,this.config).then(res => { console.log(res.data) });

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `message sended to  ${this.state.mails}`,
                showConfirmButton: false,
                timer: 1500
            })

        }
        catch (err) {
            console.error(err.message);
           
        }
    }

  
    render() {
        return (
            <div>
                {
                    console.log(this.state.mails,this.state.subject,this.state.text)
                }

                <div style={{ display: "flex", alignItems: "center" }}>
                    <Card style={{ margin: "auto", padding: 20, justifyContent: "center", minWidth: 400, width: "100%", margin: 100 }} variant="outlined">
                        <Typography style={{ textAlign: "center", margin: 10 }} variant="h4" component="h2" gutterBottom> Send Mail </Typography>
                        <Button onClick={
                            ()=>{
                                  this.setState({selectedemployees:this.state.employees});
                                  this.setState({mails:this.state.employees.map((employee)=>{return employee.email})})
                            }}>
                                <i className="fas fa-hand-pointer" style={{ marginRight: "10px", fontSize: "18px" }} ></i> select all</Button>
                        <CardContent style={{ display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex" }}>

                                <Multiselect
                                    className="multiSelect"
                                    options={this.state.employees}
                                    onSelect={(lesemployees) => { this.setState({ mails: lesemployees.map((user) => { return user.email }) }) }}
                                    onRemove={(lesemployees) => { this.setState({ mails: lesemployees.map((user) => { return user.email }) }) }}
                                    displayValue="username"
                                    selectedValues={this.state.selectedemployees}
                                />
                            </div>

                            <TextField style={{
                                width: "100%", marginTop: "30px"
                            }} id="outlined-basic" label="Subject" variant="outlined"
                                onChange={(e) => { this.setState({ subject: e.target.value }) }} />

                            <TextareaAutosize aria-label="minimum height" minRows={5} className="text-message" placeholder="type text here .."
                                onChange={(e) => { this.setState({ text: e.target.value }) }} />
                        </CardContent>
                        <CardActions>
                            <Button onClick={()=>{this.send(this.state.mails,this.state.subject,this.state.text)}}>send</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>

        );
    }


}