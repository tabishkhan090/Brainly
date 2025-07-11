import type { ReactElement } from "react";

export function Sidebaritems({icon, text}: {icon: ReactElement; text: string; }) {
    return <div className="flex text-gray-700 py-2 my-6 items-center cursor-pointer hover:bg-gray-200">
        <div className="px-3 ">
            {icon}
        </div>
        <div className="text-2xl font-light">
            {text}
        </div>
    </div>
}