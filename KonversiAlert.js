import React, {Component} from 'react';

class KonversiAlert extends Component {
    render(){
        return(
        <div className="alert alert-info alert-dismissible fade show" role="alert">
            <strong>{this.props.hasil}</strong> {this.props.note}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
		</div>
        );
    }
}

export default KonversiAlert;