import { createRoot } from 'react-dom/client';
// import 
class Main {
    static main(args) {
        Main.getRoot();
    }
    static getRoot() {
        Main.wrapper = createRoot(document.getElementById('wrapper'));
    }
    static render() {
    }
}
