// import library
import React, {Component} from 'react';

class Konversi extends Component {

    constructor(props){
        super(props);
        this.state = {
            input: '10',
            output: '10',
            nilai: '',
            hasil: ''
        }
        this.nilaiChange = this.nilaiChange.bind(this);
        this.outputChange = this.outputChange.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(event){
        this.setState({input: event.target.value})
    }

    outputChange(event){
        this.setState({output: event.target.value})
    }

    nilaiChange(event){
        this.setState({nilai: event.target.value})
    }
    
    konversi = (event) => {
        const basisInput = parseInt(this.state.input);
        const basisOutput = parseInt(this.state.output);
        const input = parseInt(this.state.nilai);

        // Proses Konversi
        if(basisInput == 10 || basisInput == 8 || basisInput == 2 || basisInput == 16){ // DESIMAL - OKTAL - BINER - HEXA (Input)
            if(basisOutput == 10 || basisOutput == 8 || basisOutput == 2 || basisOutput == 16){ // DESIMAL - OKTAL - BINER - HEXA (Output)
                let hasil = parseInt(input,basisInput).toString(basisOutput).toUpperCase();
                this.setState({hasil: hasil})
            }
        }
        event.preventDefault();
    }
    
	render(){
		return(
			<div class="card col-sm-5 mx-auto m-5 text-center">
                <div class="card-header bg-success text-light">
                    <h4>Konversi Bilangan</h4>
                </div>
                <div class="card-body">

                    {/* Input Bilangan */}
                    {/* <!-- Menu DropDown --> */}
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                        <label class="input-group-text" for="basisInput">Bilangan : </label>
                        </div>
                        <select class="custom-select" value={this.state.input} onChange={this.inputChange} >
                        <option value="10">Desimal</option>
                        <option value="8">Oktal</option>
                        <option value="2">Biner</option>
                        <option value="16">hexa</option>
                        </select>
                    </div>

                    <input type="text" class="form-control mb-2 text-center" value={this.state.nilai} onChange={this.nilaiChange} />

                    {/* <!-- Menu DropDown --> */}
                    <div class="input-group mb-2">
                        <div class="input-group-prepend">
                          <label class="input-group-text" for="basisOutput">Konversi Ke : </label>
                        </div>
                        <select class="custom-select" value={this.state.output} onChange={this.outputChange} >
                          <option value="10">Desimal</option>
                          <option value="8">Oktal</option>
                          <option value="2">Biner</option>
                          <option value="16">hexa</option>
                        </select>
                      </div>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-success form-control" onClick={this.konversi}>Convert</button>
                    <h4 className="text-center mt-4">Hasil</h4>
                    <input type="text" class="form-control mt-3 text-center" value={this.state.hasil} readOnly />
                </div>
            </div>
		);
	}
}

export default Konversi;