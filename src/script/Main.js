import React from 'react';
import { createRoot } from 'react-dom/client';
import Clock from 'COMPO/Clock';
class Main {
    static main(args) {
        Main.getRoot();
        Main.render();
    }
    static getRoot() {
        Main.wrapper = createRoot(document.getElementById('wrapper'));
    }
    static render() {
        Main.wrapper?.render(React.createElement(Clock, null));
    }
}
Main.main(['This is entry point.']);
