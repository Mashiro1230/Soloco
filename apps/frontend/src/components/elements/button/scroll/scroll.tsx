import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollButtonProps } from "@/types/types";

const ScrollButton: React.FC<ScrollButtonProps> = ({
    direction,
    onClick,
    show,
}) => {
    if (!show) return null;

    return (
        <button
            className={`absolute top-1/2 transform -translate-y-1/2 bg-white rounded-full bg-opacity-80 p-2 shadow-md z-10 ${
                direction === "left" ? "left-0" : "right-0"
            }`}
            onClick={onClick}
            aria-label={`Scroll ${direction}`}
        >
            {direction === "left" ? (
                <ChevronLeft size={24} />
            ) : (
                <ChevronRight size={24} />
            )}
        </button>
    );
};

export default ScrollButton;
