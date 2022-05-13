import React, { useState } from 'react';

import fix from 'LIB/Fix';

const Clock: React.FC<ClockProps> = (props: ClockProps) => {
    let [lH, setLH] = useState([] as string[]),
        [rH, setrH] = useState([] as string[]),
        [lM, setLM] = useState([] as string[]),
        [rM, setRM] = useState([] as string[]),
        [lS, setLS] = useState([] as string[]),
        [rS, setRS] = useState([] as string[]);
    
    class Init {
        private now: Date  = new Date();
        private hours: string[] = [];
        private minutes: string[] = [];
        private seconds: string[] = [];

        constructor () {
            this.initHours();
            this.initMinutes();
            this.initSeconds();
        }

        private initHours (): void {
            let nowHours: number = this.now.getHours();

            for (let i = nowHours; i < 24; i++) {
                this.hours.push(fix(i));
            }

            for (let i = 0; i < nowHours; i++) {
                this.hours.push(fix(i));
            }

            console.log(`${this.hours}`);
        }

        private initMinutes (): void {
            let nowMinutes: number = this.now.getMinutes();

            for (let i = nowMinutes; i < 60; i++) {
                this.minutes.push(fix(i));
            }

            for (let i = 0; i < nowMinutes; i++) {
                this.minutes.push(fix(i));
            }

            console.log(`${this.minutes}`);
        }

        private initSeconds (): void{
            let nowSeconds: number = this.now.getSeconds();

            for (let i = nowSeconds; i < 60; i++) {
                this.minutes.push(fix(i));
            }

            for (let i = 0; i < nowSeconds; i++) {
                this.minutes.push(fix(i));
            }

            console.log(`${this.seconds}`);
        }

        private initLH (): void {}

        private initRH (): void {}

        private initLM (): void {}

        private initRM (): void {}

        private initLS (): void {}

        private initRS (): void {}
    }

    new Init();

    return <></>
}

export default Clock;

interface ClockProps {}