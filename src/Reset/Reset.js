import React from 'react';
import '../App.module.css';
import {connect} from "react-redux";
import {setAndResetCurrentValueAC} from "../redux/reducer";

class Reset extends React.Component {

    setAndResetCurrentValue = () => {
        this.props.setAndResetCurrentValue()
    }

    render = () => {
        const disabled =
            this.props.currentValue === 'error'
                ? true : this.props.currentValue === 'norm'
                ? true : false

        return (
            <div className="App">
                <button onClick={this.setAndResetCurrentValue} disabled={disabled}>Reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentValue: state.currentValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAndResetCurrentValue() {
            const action = setAndResetCurrentValueAC()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Reset);
