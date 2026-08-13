import type { ReactElement } from "react";


type Variants="primary"|"secondary";
export interface ButtonProps{
    variant:Variants;
    size: "sm"|"md"|"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick:()=>void
};
const variantStyles={
    "primary":"bg-[#5046e4] text-white ",
    "secondary":"bg-[#e0e7fe] text-[#3e38a7] "
};
const sizeStyles={
    "sm":"px-4 py-1",
    "md":"px-10 py-2",
    "lg":"px-15 py-4"
}
const defaultStyles="rounded-md flex"
export const Button=(props:ButtonProps)=>{
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles}`}>
        {props.startIcon?<div className="flex flex-row gap-3 items-center">{props.startIcon}{props.text}</div>:<div>{props.text}</div>}{props.endIcon}
        </button>
}
