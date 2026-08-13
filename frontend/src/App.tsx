import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/Plusicon";

function App() {
  return (
    <div>
      <Button startIcon={<PlusIcon size="md"/>} variant="primary" size="md" text="share" onClick={()=>{alert("hello")}}/>
      <Button variant="secondary" size="lg" text="Add Content" onClick={()=>{alert("hi")}}/>
    </div>
  );
}

export default App;
