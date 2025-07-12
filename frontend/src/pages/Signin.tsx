import { useRef } from "react";
import { Buttons } from "../components/Button";
import { Input } from "../components/input";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Signin() {
    const usernameRef = useRef<any>("");
    const passwordRef = useRef<any>("");

    async function signin(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
            username,
            password
        })
        // @ts-ignore
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);

        alert("you are successfully signed up");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-4 h-80 w-70 flex flex-col items-center justify-center gap-4 rounded-2xl shadow-xl">
            <div>
                <Input placeholder="Username" refrance={usernameRef}/>
                <Input placeholder="Password" refrance={passwordRef}/>
            </div>
            <div className="p-2">
                <Buttons onClick={signin} variant="ternary" title="Signin"/>
            </div>
        </div>
    </div>
}