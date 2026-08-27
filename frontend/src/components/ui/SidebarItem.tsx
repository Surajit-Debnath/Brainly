import type { ReactElement } from "react";

export function SidebarItem({text,icon}:{
    text:string;
    icon:ReactElement
}){
    return <div className="pl-4 flex flex-row items-center gap-4 text-gray-700 py-4 cursor-pointer hover:bg-gray-100 rounded mr-8 transition-all duration-200">
         <div >
            {icon}
         </div>
         <div >
             {text}
         </div>
    </div>
  
}