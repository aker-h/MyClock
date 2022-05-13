import React from 'react';
import { Root, createRoot } from 'react-dom/client';

import Clock from 'COMPO/Clock';

class Main {
    private static wrapper: Root | null;

    public static main (args: string[]): void {
        Main.getRoot();
        Main.render();
    }

    private static getRoot (): void {
        Main.wrapper = createRoot(document.getElementById('wrapper')!);
    }

    private static render (): void {
        Main.wrapper?.render(<Clock/>)
    }
}

Main.main(['This is entry point.']);