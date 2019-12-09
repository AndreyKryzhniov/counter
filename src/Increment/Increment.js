import React from 'react';
import '../App.module.css';
import {connect} from "react-redux";
import {incrementCurrentAC} from "../redux/reducer";

class Increment extends React.Component {

    incrementCurrent = () => {
        this.props.incrementCurrent()
    }

    render = () => {

        const disabled =
            this.props.currentValue === this.props.maxValue
                ? true : this.props.currentValue === 'error'
                ? true : this.props.currentValue === 'norm' ? true : false

        return (
            <div className="Increment">
                <button onClick={this.incrementCurrent} disabled={disabled}>Inc</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentValue: state.currentValue,
        maxValue: state.maxValue
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCurrent() {
            const action = incrementCurrentAC()
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Increment);
