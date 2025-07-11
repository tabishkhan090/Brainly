import { Documenticon } from "../icons/documenticon";
import { Hashicon } from "../icons/hashicon";
import { Linkicon } from "../icons/linkicon";
import { Logoicon } from "../icons/logoicon";
import { Twittericon } from "../icons/twittericon";
import { Youtubeicon } from "../icons/youtubeicon";
import { Sidebaritems } from "./Sidebaritems";

export function Sidebar() {
    return <div className="h-screen w-90 bg-white fixed top-0 left-0 pl-4 ">
        <div className="flex items-center text-2xl font-bold pt-6 gap-1">
            <div className="text-primary ">
            <Logoicon/>
            </div>
            <div>
                Second Brain
            </div>
        </div>
        <div className="pl-4 pt-4">
            <Sidebaritems icon={<Twittericon/>} text="Tweets"/>
            <Sidebaritems icon={<Youtubeicon/>} text="Videos"/>
            <Sidebaritems icon={<Documenticon/>} text="Documents"/>
            <Sidebaritems icon={<Linkicon/>} text="Links"/>
            <Sidebaritems icon={<Hashicon/>} text="Tags"/>
        </div>
    </div> 
}