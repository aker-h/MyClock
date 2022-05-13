import React from 'react';

const Digit: React.FC<DigitProps> = (props: DigitProps) => {
    return <>
        {props.classNames.map((className) => {
            <div className={className}/>
        })}
    </>
}

export default Digit;

interface DigitProps {
    classNames: string[]
}
