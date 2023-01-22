import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import xlsx from 'xlsx';
import history from '../../../../history';


const EXTENSIONS = ['xlsx', 'xls', 'csv']
export default class Home extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		file: "",
	}
	config = {
		headers: {
			"Content-Type": "application/json",
		}
	}

	async mailingForUpdate() {
		await axios.get('/api/mails/mailingForUpdate',this.config).then((res) => {

			Swal.fire({
				position: 'center',
				icon: 'success',
				title: res.data.message,
				showConfirmButton: false,
				timer: 1500
			})


		}).catch((err) => {
			console.log("error in sending update email",err)
		})

	}

	removeCaracter(word, c) {

		return word.toString().split("").filter((char) => (char != c.toLowerCase()) && (char != c.toUpperCase)).join("")
	}


	getExtension = (file) => {
		const parts = file.name.split('.');
		const extension = parts[parts.length - 1];
		return EXTENSIONS.includes(extension);
	}


	convertToJson = (headers, data) => {
		const rows = [];
		data.forEach(row => {
			let rowData = {}
			row.forEach((element, index) => {
				rowData[headers[index]] = element;
			})
			rows.push(rowData);
		});
		return rows;
	}


	importExcel = (e) => {
		const file = e.target.files[0];
		this.setState({ file: file });
		return file
	}

	uploadExcelFile = (file) => {
		if (file) {
			const reader = new FileReader();

			reader.onload = (event) => {
				//parse data
				const bstring = event.target.result;
				const workBook = xlsx.read(bstring, { type: "binary", cellDates: true });
				//get first sheet
				const workSheetName = workBook.SheetNames[0];
				const workSheet = workBook.Sheets[workSheetName];
				//convert to array  
				const fileData = xlsx.utils.sheet_to_json(workSheet, { header: 1 })
				//deleting header
				let header = fileData[0];
				header = header.map((head) => { return this.removeCaracter(this.removeCaracter(head, '.'), " ") });
				console.log(header);
				const heads = header.map((head) => { return { title: head, field: head } })
				fileData.splice(0, 1);
				//converting data to json data
				const data = this.convertToJson(header, fileData);
				// console.log(heads);
				// console.log("data", data)
				// let data2 = data;
				// console.log("**********************************************hey data2*********", data[0].Début.getHours());

				let formatedData = data.map((pointage) => {

					let debut = new Date(pointage.Début);
					let fin = new Date(pointage.Fin);
					let date = new Date(pointage.Date)
					let TempsValide = new Date(pointage.Tempsvalide)

					let pointing = {
						Fin: {
							heure: fin.getHours(),
							minute: fin.getMinutes(),
						},
						Debut: {
							heure: debut.getHours(),
							minute: debut.getMinutes(),
						},
						Date: {
							jour: date.getDate(),
							mois: date.getMonth() + 1,
							année: date.getFullYear(),
						},
						Tempsvalide:
						{
							heure: TempsValide.getHours(),
							minute: TempsValide.getMinutes(),
						},
						Matricule: pointage.Matricule,
						Nom: pointage.Nom,
						Departement: pointage.Departement,
						Motif: pointage.Motif,
						EmpNum: pointage.EmpNum

					}
					console.log(pointing)
					return pointing;
				})

				console.log("formated data===", formatedData)


				// data.forEach((element)=>{console.log( "hours :",element.Fin.getHours(),"minutes:",element.Fin.getMinutes(),"seconds:",element.Fin.getSeconds())})
				// // data.forEach((element)=>{console.log( "hours :",element.temps_validé.getHours(),"minutes:",element.temps_validé.getMinutes(),"seconds:",element.getSeconds())})


				//inserting data into db
				formatedData.forEach(async (row) => {
					await axios.get(`/api/employee/${row.EmpNum}`,this.config).then(async (res) => {
						console.log("emp :", res.data.data)
						if (res.data.data) {
							await axios.post('/api/pointages/', row,this.config).then((res) => {
								console.log(res);
							}).catch((err) => { 
								console.log("error : ", err) 
							})
						}
						else {
							console.log("pas d'employée associé ..")
						}
					}).catch((err) => { 
						console.log("error : ", err) 
					})

				})

			}
			if (this.getExtension(file)) {
				reader.readAsBinaryString(file);
				Swal.fire("data inserted successfully into dataBase")
			}
			else {
				return Swal.fire("invalid file input");
				this.setState({ file: "" })
			}
		}
		else {
			Swal.fire("no file ..")
		}


	}



	render() {
		return (
			<>
				<div className="card-box pd-20 height-100-p mb-30">
					<div className="row align-items-center">
						<div className="col-md-12">
							<img src="/vendors/images/home2.jfif" alt="" style={{ height: "250px" }} />
						</div>

					</div>
				</div>
				<div className="pd-20 card-box mb-30">
					<div className="col-md-8">
						<h6 className="font-20 weight-500 mb-10 text-capitalize">
							<div className="weight-600 font-30 " style={{ color: "#4682B4" }}> Welcome back To Acoba </div>
						</h6>
					</div>
				</div>


				<div className="pd-20 card-box mb-30">
					<div className="weight-600 font-15 " style={{ marginBottom: "10px" }}> <i className="fas fa-upload" style={{ marginRight: "20px" }}></i>uploading clock in and clock out data </div>

					<button onClick={() => { this.uploadExcelFile(this.state.file) }} type="button" className="btn" data-bgcolor="#007bb5" data-color="#ffffff" style={{ color: "rgb(255, 255, 255); background-color: rgb(0, 123, 181)" }}><i style={{ marginRight: "10px" }} className="icon-copy fa fa-paper-plane"></i> upload Excel file </button>
					<input type="file" onChange={(e) => { this.importExcel(e) }} />

				</div>

				<div className="pd-20 card-box mb-30">
					<div className="weight-600 font-15 " style={{ marginBottom: "10px" }}> <i className="fas fa-mail-bulk" style={{ marginRight: "20px" }}></i> sending month Recap </div>

					<button onClick={() => { this.mailingForUpdate() }} type="button" className="btn" data-bgcolor="#007bb5" data-color="#ffffff" style={{ color: "rgb(255, 255, 255); background-color: rgb(0, 123, 181)" }}><i style={{ marginRight: "10px" }} className="icon-copy fa fa-paper-plane"></i> send month Recap</button>
				</div>

			</>
		);
	}
}
