// import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
// import { PlusIcon } from "./icons/Plusicon";
// import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="p-10">
      <Card title="First video" type="youtube" link="https://www.youtube.com/watch?v=llk9VrljLlY&list=RDllk9VrljLlY&start_radio=1"/>
      <Card title="First twite" type="twitter" link="https://x.com/kushmergedeck/status/2091764049617080501?ref_src=twsrc%5Etfw"/>
    </div>
  );
}

export default App;

