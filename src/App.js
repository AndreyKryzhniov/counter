import React from 'react';
import s from './App.module.css'
import InputPanel from "./InputPanel/Input";
import OutputPanel from "./OutputPanel/Output";

class App extends React.Component {

    // componentDidMount() {
    //     this.restoreState()
    // }
    //
    // state = {
    //     disabled: true,
    //     currentValue: 1,
    //     maxValue: 0,
    //     startValue: 0
    // }
    //
    // saveState = () => {
    //     let stateAsString = JSON.stringify(this.state)
    //     localStorage.setItem('counter', stateAsString)
    // }
    //
    // restoreState = () => {
    //     let state = {
    //         currentValue: this.state.currentValue,
    //         maxValue: this.state.maxValue,
    //         startValue: this.state.startValue
    //     }
    //     let stateAsString = localStorage.getItem('counter')
    //     if (stateAsString !== null) {state = JSON.parse(stateAsString)}
    //     this.setState(state)
    // }
    //
    //
    // inc = () => {
    //     if (this.state.currentValue < this.state.maxValue) {
    //         this.setState({currentValue: Number(this.state.currentValue) + 1}, () => {this.saveState()})
    //     }
    // }
    // resetAndSet = () => {
    //     this.setState({
    //         disabled: true,
    //         currentValue: this.state.startValue
    //     }, () => {this.saveState()})
    // }

    render = () => {
        return (
            <div className={s.App}>
                <InputPanel/>
                <OutputPanel/>
            </div>
        );
    }
}

export default App;
