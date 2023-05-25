import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import CardDetail from "./CardDetail";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/CardDetail.js",
    element: <CardDetail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
