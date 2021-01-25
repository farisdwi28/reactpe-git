// import library
import React, {Component} from 'react';

// class
class Cicilan extends Component {
    constructor(props){
        super(props);
        this.state = {
            nominal: '',
            bunga: '',
            periode: '12',
            hasilB: 'Bunga:',
            hasilC: 'Cicilan pokok:',
            hasilA: 'Angsuran per bulan:'
        };

        this.nominalChange = this.nominalChange.bind(this);
        this.bungaChange = this.bungaChange.bind(this);
        this.periodeChange = this.periodeChange.bind(this);
    }

    nominalChange(event){
        this.setState({nominal: event.target.value})
    }

    bungaChange(event){
        this.setState({bunga: event.target.value})
    }

    periodeChange(event){
        this.setState({periode: event.target.value})
    }

    hitung = (event)  => {
        let nominal = this.state.nominal;
        let bunga = this.state.bunga;
        let periode = this.state.periode;

        // kalkulasi
        let b = bunga / 100;
        let Bbunga = (nominal * b) / periode; 
        let Cpokok = nominal / periode;
        let ApBulan = Cpokok + Bbunga;

        //output
        this.setState({hasilB: "Bunga: Rp. " + Bbunga})
        this.setState({hasilC: "Cicilan pokok: Rp. " + Cpokok})
        this.setState({hasilA: "Angsuran per bulan: Rp. " + ApBulan})

        event.preventDefault();
    }

    render(){
        return(
            <div className="card col-sm-5 mx-auto m-5">
				<div className="card-header text-center bg-warning text-white">
					<h4>Cicilan Bank</h4>
				</div>
				<div className="card-body">
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                        <label class="input-group-text" >Nominal : </label>
                        </div>
                        <input type="number" className="form-control" onChange={this.nominalChange}/>
                    </div>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                        <label class="input-group-text" >Bunga (%) : </label>
                        </div>
                        <input type="number" className="form-control" onChange={this.bungaChange}/>
                    </div>
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                        <label class="input-group-text" >Periode : </label>
                        </div>
                        <select class="custom-select" value={this.state.periode} onChange={this.periodeChange}>
                            <option value="12">12</option>
                            <option value="24">24</option>
                            <option value="36">36</option>
                        </select>
                    </div>
				</div>
				<div className="card-footer">
					<button className="form-control btn btn-warning text-white" onClick={this.hitung}>
						Hitung
					</button>
					<h4 className="text-center mt-4">Hasil</h4>
					<input className="form-control mb-1" value={this.state.hasilB} readOnly/>
                    <input className="form-control mb-1" value={this.state.hasilC} readOnly/>
                    <input className="form-control mb-1" value={this.state.hasilA} readOnly/>
				</div>
			</div>
        );
    }
}

export default Cicilan;