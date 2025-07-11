import type { ReactElement } from "react";
import { Shareicon } from "../icons/shareicon";
import { Deleteicon } from "../icons/deleteicon";

interface CardInterface {
    linkurl?: string;
    heading: string;
    starticon: ReactElement;
    text?: string;
    type: "twitter" | "youtube" | "document";
    timestamp: string;
    content?: string;
}

export function Cards(props: CardInterface){
    return <div className="flex flex-col border w-90 border-gray-200 bg-white p-4 rounded-xl h-120 ">
        <div className="flex flex-row justify-between text-xl">
            <div className="flex">
                <div className="pr-2 ">
                    {props.starticon}
                </div>
                {props.heading}
            </div>
            <div className="flex cursor-pointer">
                <div className="pr-3 text-gray-500">
                    <Shareicon />
                </div>
                <div className=" text-gray-500">
                    <Deleteicon />
                </div>
            </div>
        </div>
        <div className="pt-4 flex-grow overflow-y-auto ">
            {props.type === "youtube" && props.linkurl && <iframe className="w-full h-full pt-10 " src={props.linkurl.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {props.type === "twitter" && props.linkurl && (
            <blockquote className="twitter-tweet ">
            <a href={props.linkurl}></a>
            </blockquote>
            )}
            {props.content && (
            <div className="text-2xl text-gray-600 pl-2 pt-4">
                {props.content}
            </div>)}
        </div> 
        <div className="text-md text-gray-500 flex items-center px-2 pt-4"> 
            {props.timestamp && (
            <div className="">
                Added on {props.timestamp}
            </div>
            )}
        </div>
    </div>
}