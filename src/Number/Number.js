import React from 'react';
import s from './Number.module.css'






class Number extends React.Component {

  render = () => {

      const red = this.props.state.currentValue === this.props.state.maxValue ? s.color : s.color_first

    return (
        <div className={s.number}>
            <span className={red}>{this.props.state.currentValue}</span>
        </div>
    );
  }
}

export default Number;
