import { useRef, type ReactElement } from "react";
import { Closeicon } from "../icons/closeicon";
import { Buttons } from "./Button";
import { Input } from "./input";
import axios from "axios";
import { useState } from "react";
import { Youtubeicon } from "../icons/youtubeicon";
import { Twittericon } from "../icons/twittericon";
import { Documenticon } from "../icons/documenticon";

export const ContentType = {
    Youtube: "youtube",
    Twitter: "twitter"
} as const;

export function Createcontentmodal({open , onClose}: any){

    const [type, setType] = useState(ContentType.Youtube);
    const titleRef = useRef<any>("");
    const linkRef = useRef<any>("");
    const documentRef = useRef<any>("");

    async function addContent() {
        const title = titleRef.current.value;
        const link = linkRef.current.value;
        const document = documentRef.current.value;
        
        await axios.post('${BACKEND_URL}/api/v1/content', {
            type,
            title,
            link,
            document
        },{
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
    }

    return (
        <div>
            {open && (
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-40">
                    <div className="absolute w-full h-full bg-slate-500 opacity-60 z-40" />
                    <div className="z-50">
                        <div className="flex flex-col justify-center">
                            <span className="bg-white p-4 rounded-xl shadow-xl w-80 h-100 flex flex-col  ">
                                <div className="flex justify-end cursor-pointer p-2" onClick={onClose} >
                                    <Closeicon/>
                                </div>
                                <div className="flex items-center cursor-pointer px-10 gap-5">
                                    <RadioOption StartIcon={<Youtubeicon w={30} h={35} />} />
                                    <RadioOption StartIcon={<Twittericon w={25} h={25}/>} />
                                    <RadioOption StartIcon={<Documenticon w={30} h={35}/>} />
                                </div>
                                <div className="flex flex-col items-center gap-3 p-4">
                                    <Input refrance={titleRef} placeholder={"Title"} />
                                    <Input refrance={linkRef} placeholder={"Link"} />
                                    <Input refrance={documentRef} placeholder="Description" />
                                </div>
                                <div className="flex justify-center">
                                    <Buttons onClick={addContent} variant="ternary" title="Submit" />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function RadioOption({ StartIcon }: {StartIcon: any}){
    return <div className="flex items-center gap-1">
        <input
            type="radio"
            id="option1"
            name="options"
            value="option1"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            {StartIcon}
    </div>
}