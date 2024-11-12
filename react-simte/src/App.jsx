import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Qna from "./routes/Qna";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/qna",
    element: <Qna />
  },
]);

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
