import type { ReactElement } from "react";

interface ButtonInterface {
    variant: "primary" | "secondary" | "ternary";
    title: string;
    startIcons?: ReactElement;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

const variantClasses = {
    "primary": "bg-primary text-white px-7 py-4",
    "secondary": "bg-secondary text-logo px-7 py-4",
    "ternary": "bg-primary text-white px-4 py-2",
}
const defaultStyles = "rounded-xl font-light flex items-center text-lg cursor-pointer";

export function Buttons(props: ButtonInterface){
    return <button onClick={props.onClick} className = { variantClasses[props.variant] + " " + defaultStyles } >
        {(props.variant==="primary" || props.variant==="secondary") && 
        <div className="pr-2">
            {props.startIcons}
        </div>}
        {props.title}
    </button> 
}