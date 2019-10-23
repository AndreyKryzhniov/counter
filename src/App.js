import React from 'react';
import s from './App.module.css';
import Number from "./Number/Number";
import Increment from "./Increment/Increment";
import Reset from "./Reset/Reset";

class App extends React.Component {

    state = {
        currentValue: 0,
        maxValue: 10,
        startValue: 0
    }

    inc = () => {
        if (this.state.currentValue < this.state.maxValue) {
            this.setState({
                currentValue: this.state.currentValue + 1
            })
        }
    }

    res = () => {
        this.setState({
            currentValue: this.state.startValue
        })
    }


    render = () => {
        return (
            <div className={s.App}>
                <div className={s.wrapper}>
                    <div>
                        <Number state={this.state}/>
                    </div>
                    <div className={s.button}>
                        <Increment inc={this.inc} state={this.state}/>
                        <Reset res={this.res}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
