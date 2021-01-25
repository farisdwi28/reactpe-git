// import library
import React, {Component} from 'react';

class Ppn extends Component {

	constructor(props){
		super(props);
		this.state = {
			harga_awal: '',
			ppn: '',
			diskon: '',
			harga_akhir: ''
		};

		this.harga_awalChange = this.harga_awalChange.bind(this);
		this.ppnChange = this.ppnChange.bind(this);
        this.diskonChange = this.diskonChange.bind(this);
        this.hitung = this.hitung.bind(this);
	}

	harga_awalChange(event) {
		this.setState({harga_awal: event.target.value})
	}

	ppnChange(event){
		this.setState({ppn: event.target.value})
    }
    
    diskonChange(event){
        this.setState({diskon: event.target.value})
    }
	
	hitung = (event) => {
        const ha = parseInt(this.state.harga_awal);
        const ppn = parseInt(this.state.ppn) / 100;
        const dis = parseInt(this.state.diskon) / 100;

        const paj = (ppn * ha);
        const disk = (ha * dis);
        const hak = ha + paj - disk;

        this.setState({harga_akhir: "Harga akhir: Rp." + hak})
			
		event.preventDefault();
	}

	render(){
		return(
			<div className="card col-sm-5 mx-auto m-5">
				<div className="card-header text-center bg-danger text-white">
					<h4>Hitung Harga Akhir</h4>
				</div>
				<div className="card-body">
					<div class="input-group mb-2">
						<div class="input-group-prepend">
						<label class="input-group-text" >Harga awal : </label>
						</div>
						<input type="number" className="form-control" onChange={this.harga_awalChange}/>
					</div>
					<div class="input-group mb-2">
						<div class="input-group-prepend">
						<label class="input-group-text" >PPN (%) : </label>
						</div>
						<input type="number" className="form-control" onChange={this.ppnChange}/>
					</div>
					<div class="input-group mb-2">
						<div class="input-group-prepend">
						<label class="input-group-text" >Diskon (%) : </label>
						</div>
						<input type="number" className="form-control" onChange={this.diskonChange}/>
					</div>
				</div>
				<div className="card-footer">
					<button className="form-control btn btn-danger" onClick={this.hitung} >
						Hitung
					</button>
					<h4 className="text-center mt-4">Hasil</h4>
					<input className="form-control" value={this.state.harga_akhir} readOnly/>
				</div>
			</div>
		);
	}
}

export default Ppn;