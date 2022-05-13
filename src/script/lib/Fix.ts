export default function fix (num: string | number): string {
    let result = `0${num}`;
    return result.slice(-2);
}