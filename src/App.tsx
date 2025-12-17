import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const App = () => {
  return (
    <div data-testid="app" className="font-campton ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
