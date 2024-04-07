import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import StarWars from "./components/StarWars/StarWars";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LogIn from "./components/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "people",
    element: (
      <ProtectedRoute>
        <StarWars />
      </ProtectedRoute>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
      {/* App is custom hooks lesson component */}
      {/* <App /> */}
      {/* StarWars is RTK Query lesson component */}
      {/* <StarWars /> */}
    </React.StrictMode>
  </Provider>
);
