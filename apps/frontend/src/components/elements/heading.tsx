import React from "react";

type HeadingProps = {
    children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ children }) => {
    return (
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center px-4 sm:px-6 py-2 sm:py-3 mt-4 sm:mt-6 mb-2">
            {children}
        </h2>
    );
};

export default Heading;