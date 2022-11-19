import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/PublicRoutes/Routes";
import { ToastBar, Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container mx-auto ">
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
    </div>
    
  );
}

export default App;
