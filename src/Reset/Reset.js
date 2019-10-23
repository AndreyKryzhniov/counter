import React from 'react';
import '../App.module.css';

class Reset extends React.Component {


  render = () => {



    return (
        <div className="App">
            <button onClick={this.props.res} >Reset</button>
        </div>
    );
  }
}

export default Reset;
