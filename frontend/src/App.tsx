import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/Plusicon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <Button startIcon={<ShareIcon size="md"/>} variant="primary" size="md" text="share" />
      <Button startIcon={<PlusIcon size="md"/>} variant="secondary" size="lg" text="Add Content"/>
    </div>
  );
}

export default App;
