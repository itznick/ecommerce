import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Terminal } from "lucide-react";

const App = () => {
  return (
    <div className="p-4 h-full flex items-center justify-center">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Ecommerce Platform</AlertTitle>
        <AlertDescription>This is a platform for ecommerce.</AlertDescription>
      </Alert>
    </div>
  );
};

export default App;
