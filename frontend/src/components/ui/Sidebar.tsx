import { BrainIcon } from "../../icons/BrainIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
  return <div className="h-screen w-72 border-r bg-white fixed left-0
  top-0 pl-6">
         <div className="pt-4 text-2xl flex gap-2 text-gray-700">
              <div className="text-[#3e38a7]">
                 <BrainIcon/>
              </div>
              <div>
                Brainly
              </div>
         </div>
         <div className="pt-4">
             <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
             <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
         </div>
  </div>
}