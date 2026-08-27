import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import {useRef} from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export function Login(){
    const usernameRef=useRef<HTMLInputElement>(null);
    const passwordRef=useRef<HTMLInputElement>(null);
    const navigate=useNavigate();
    async function login() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
         try {
        const response = await axios.post(`${BACKEND_URL}/login`, {
            username,
            password
        });

        const jwt=response.data.token;
        localStorage.setItem("token",jwt);
        navigate("/dashboard");
    } catch (error) {
        console.error(error);
        alert("Login failed");
    }
    }
    return <div className="w-screen h-screen bg-gray-100 flex
    justify-center items-center">
        <div className="bg-white rounded-2xl boarder min-w-80 min-h-90 p-12 pt-20">
        <Input reference={usernameRef} type="text" placeholder="Username"/>
        <Input reference={passwordRef} type="password" placeholder="Password"/>
        <div className="pt-10 flex justify-center">
            <Button onClick={login} loading={false} variant="primary" size="fullWidth" text="Login"/>
        </div>
        
        </div>
    </div>
}