import { Closeicon } from "../icons/closeicon";
import { Buttons } from "./Button";
import { Input } from "./input"

export function Createcontentmodal({open , onClose}: any){
    return (
        <div>
            {open && (
                <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-40">
                    <div className="absolute w-full h-full bg-slate-500 opacity-60 z-40" />
                    <div className="z-50">
                        <div className="flex flex-col justify-center">
                            <span className="bg-white p-4 rounded-xl shadow-xl w-80 h-100 flex flex-col  ">
                                <div className="flex justify-end cursor-pointer p-4" onClick={onClose} >
                                    <Closeicon/>
                                </div>
                                <div className="flex flex-col items-center gap-3 p-4">
                                    <Input placeholder={"Title"} />
                                    <Input placeholder={"Link"} />
                                    <Input placeholder="Description" />
                                </div>
                                <div className="flex justify-center pt-2">
                                    <Buttons variant="ternary" title="Submit" />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
