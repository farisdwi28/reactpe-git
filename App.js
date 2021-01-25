// import library
import React, {Component} from 'react';
import Bmi from './Components/Bmi';
import Cicilan from './Components/Cicilan';
import Ppn from './Components/Ppn';
import Konversi from './Components/Konversi';

class App extends Component{
  render(){
    return(
      <div className="parent-box">
        <div className="container">
          <div className="row">
            <Bmi/>
            <Cicilan/>
            <Ppn/>
            <Konversi/>
          </div>
          <p className="text-center ">Copyright 2020</p>
        </div>
      </div>
    );
  }
}

export default App;