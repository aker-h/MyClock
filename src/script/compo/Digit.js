import React from 'react';
const Digit = (props) => {
    return React.createElement(React.Fragment, null, props.classNames.map((className) => {
        React.createElement("div", { className: className });
    }));
};
export default Digit;
