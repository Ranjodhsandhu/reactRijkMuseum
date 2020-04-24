import React, {Component} from 'react';

class DisplaySelect extends Component{
    render(){
        return(
            <div key="selctionDiv">
                <form action="">
                <label htmlFor="animals">Select Animal  </label>
                <select name="animals" id="animals" onChange={this.props.getSelection}>
                        <option value="monkey">Monkeys</option>
                        <option value="eagle">Eagles</option>
                        <option value="dragon">Dragons</option>
                        <option value="elephant">Elephants</option>
                        <option value="centaur">Centaur</option>
                </select>
                </form>
            </div>
        )
    }
}

export default DisplaySelect;