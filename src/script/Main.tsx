import { Root, createRoot } from 'react-dom/client';

// import 

class Main {
    private static wrapper: Root | null;

    public static main (args: string[]): void {
        Main.getRoot();
    }

    private static getRoot (): void {
        Main.wrapper = createRoot(document.getElementById('wrapper')!);
    }

    private static render (): void {
        
    }
}