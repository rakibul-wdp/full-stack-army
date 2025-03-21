import React from 'react';

const Button = ({ title, onClick, children }) => {
    return (React.createElement("button", { title: title, onClick: onClick, className: "btn btn-primary" }, children));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
