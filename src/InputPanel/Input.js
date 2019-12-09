import React from 'react';
import s from './InputPanel.module.css';
import {connect} from "react-redux";
import {changeMaxValueAC, changeStartValueAC, setAndResetCurrentValueAC} from "../redux/reducer";

class InputPanel extends React.Component {

    changeStartValue = (e) => {
        this.props.changeStartValue(e.currentTarget.value)
    }

    changeMaxValue = (e) => {
        this.props.changeMaxValue(e.currentTarget.value)
    }

    setAndResetCurrentValue = () => {
        this.props.setAndResetCurrentValue()
    }

    render = () => {

        let start = this.props.startValue < 0 ? s.red : ''

        let max = this.props.maxValue < 0 ? s.red : ''

        return (
            <div className={s.wrapper}>
                    <div className={s.entryField}>
                        <div>
                            <span>max value: </span>
                            <input
                                type='number'
                                onChange={this.changeMaxValue}
                                className={max}
                            value={this.props.maxValue}/>
                        </div>
                        <div>
                            <span>start value: </span>
                            <input type='number'
                                   onChange={this.changeStartValue}
                                   className={start}
                                   value={this.props.startValue}/>
                        </div>
                    </div>
                    <div className={s.enterButton}>
                        <button onClick={this.setAndResetCurrentValue} disabled={this.props.disabled}>SET</button>
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        maxValue: state.maxValue,
        startValue: state.startValue,
        disabled: state.disabled
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStartValue(startValue) {
            const action = changeStartValueAC(startValue)
            dispatch(action)
        },
        changeMaxValue(maxValue) {
            const action = changeMaxValueAC(maxValue)
            dispatch(action)
        },
        setAndResetCurrentValue(maxValue) {
            const action = setAndResetCurrentValueAC(maxValue)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPanel);
