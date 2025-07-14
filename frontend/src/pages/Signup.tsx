import { useRef } from "react";
import { Buttons } from "../components/Button";
import { Input } from "../components/input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const navigate = useNavigate();
    const usernameRef = useRef<any>("");
    const passwordRef = useRef<any>("");

    async function signup(){
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    await axios.post(BACKEND_URL + "/api/v1/signup" ,{
        username,
        password
    })
    navigate("/signin")
    alert("you are successfully signed up");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white p-4 h-80 w-70 flex flex-col items-center justify-center gap-4 rounded-2xl shadow-xl">
            <div>
                <Input placeholder="Username" refrance={usernameRef}/>
                <Input placeholder="Password" refrance={passwordRef}/>
            </div>
            <div className="p-2">
                <Buttons onClick={signup} variant="ternary" title="Signup"/>
            </div>
        </div>
    </div>
}