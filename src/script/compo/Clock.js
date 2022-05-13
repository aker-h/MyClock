import React, { useState } from 'react';
import fix from 'LIB/Fix';
const Clock = (props) => {
    let [lH, setLH] = useState([]), [rH, setrH] = useState([]), [lM, setLM] = useState([]), [rM, setRM] = useState([]), [lS, setLS] = useState([]), [rS, setRS] = useState([]);
    class Init {
        constructor() {
            this.now = new Date();
            this.hours = [];
            this.minutes = [];
            this.seconds = [];
            this.initHours();
            this.initMinutes();
            this.initSeconds();
        }
        initHours() {
            let nowHours = this.now.getHours();
            for (let i = nowHours; i < 24; i++) {
                this.hours.push(fix(i));
            }
            for (let i = 0; i < nowHours; i++) {
                this.hours.push(fix(i));
            }
            console.log(`${this.hours}`);
        }
        initMinutes() {
            let nowMinutes = this.now.getMinutes();
            for (let i = nowMinutes; i < 60; i++) {
                this.minutes.push(fix(i));
            }
            for (let i = 0; i < nowMinutes; i++) {
                this.minutes.push(fix(i));
            }
            console.log(`${this.minutes}`);
        }
        initSeconds() {
            let nowSeconds = this.now.getSeconds();
            for (let i = nowSeconds; i < 60; i++) {
                this.minutes.push(fix(i));
            }
            for (let i = 0; i < nowSeconds; i++) {
                this.minutes.push(fix(i));
            }
            console.log(`${this.seconds}`);
        }
        initLH() { }
        initRH() { }
        initLM() { }
        initRM() { }
        initLS() { }
        initRS() { }
    }
    new Init();
    return React.createElement(React.Fragment, null);
};
export default Clock;
