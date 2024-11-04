import React from "react";

type SubHeadingProps = {
    children: React.ReactNode;
};

const SubHeading: React.FC<SubHeadingProps> = ({ children }) => {
    return <h2 className="text-2xl font-bold text-center p-3">{children}</h2>;
};

export default SubHeading;