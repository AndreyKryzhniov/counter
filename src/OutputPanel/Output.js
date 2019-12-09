import React from 'react';
import s from './OutputPanel.module.css';
import Number from "../Number/Number";
import Increment from "../Increment/Increment";
import Reset from "../Reset/Reset";

class OutputPanel extends React.Component {

    render = () => {

        return (
            <div className={s.wrapper}>
                <div>
                    <Number/>
                </div>
                <div className={s.button}>
                    <Increment/>
                    <Reset/>
                </div>
            </div>
        );
    }
}

export default OutputPanel;
