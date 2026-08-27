import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModal } from "../components/ui/CreateContentModal";
import { PlusIcon } from "../icons/Plusicon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";

export function DashBoard() {
  const [modalOpen,setModalOpen]=useState(false)
  return (
    <div>
      <Sidebar/>
    <div className="p-4 ml-72 min-h-screen bg-[#eeeeef]">
      <CreateContentModal open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
      <div className="flex justify-end gap-4">
        <Button size="md" text="Add content" variant="primary" startIcon={<PlusIcon size="md"/>} onClick={()=>{setModalOpen(true)}}/>
        <Button size="md" text="Share brain" variant="secondary" startIcon={<ShareIcon size="md"/>}/>
      </div>
      <div className="p-10 flex gap-4">
      <Card title="First video" type="youtube" link="https://www.youtube.com/watch?v=llk9VrljLlY&list=RDllk9VrljLlY&start_radio=1"/>
      <Card title="First twitte" type="twitter" link="https://x.com/kushmergedeck/status/2091764049617080501?ref_src=twsrc%5Etfw"/>
      </div>
    </div>
  </div>
  );
}

export default DashBoard;

