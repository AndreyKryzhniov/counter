import React from 'react';
import s from './Number.module.css'
import {connect} from "react-redux";

class Number extends React.Component {

    render = () => {

        const red = this.props.currentValue === this.props.maxValue
            ? s.color : this.props.currentValue === 'error'
                ? s.color : s.color_first

        return (
            <div className={s.number}>
                <span className={red}>{this.props.currentValue}</span>
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

export default connect(mapStateToProps, null)(Number);
