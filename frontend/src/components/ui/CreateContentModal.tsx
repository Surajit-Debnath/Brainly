import { Crossicon } from "../../icons/Crossicon";
import { Button } from "./Button";
import { Input } from "./Input";

export interface ModelProps{
    open:boolean;
    onClose:()=>void
}

export function CreateContentModal({open,onClose}:ModelProps){
    return <div>
        {open && <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                         <div onClick={onClose} className="cursor-pointer">
                            <Crossicon size="lg"/>
                         </div>
                         
                    </div>
                    <div>
                        <Input type="text" placeholder="Title"/>
                        <Input type="text" placeholder="Link"/>
                    </div>
                    <div className="flex justify-center">
                         <Button variant="primary" text="Submit" size="sm"/>
                    </div>
                    
                </span >
            </div> 
            </div>}
    </div>
}