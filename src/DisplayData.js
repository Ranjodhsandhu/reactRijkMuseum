import React, {Component} from 'react';

class DisplayData extends Component{
    render(){
        return(
            <div>

                <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} alt={this.props.title} width='300' height='300'/>
                <p>{this.props.longTitle}</p>
            
            </div>
        )
    }
}

export default DisplayData;