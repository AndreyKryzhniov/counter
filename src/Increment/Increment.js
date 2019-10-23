import React from 'react';
import '../App.module.css';

class Increment extends React.Component {


  render = () => {

      const disabled = this.props.state.currentValue === this.props.state.maxValue ? true : false

    return (
        <div className="Increment">
            <button onClick={this.props.inc} disabled={disabled}>Inc</button>
        </div>
    );
  }
}

export default Increment;
