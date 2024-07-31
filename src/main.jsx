import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SignIn from "./components/authentication/SignIn.jsx";
import DashBoard from "./components/dashboard/DashBoard.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Leaderboard from "./components/leaderboard/Leaderboard.jsx";
import Order from "./components/order/Order.jsx";
import Products from "./components/products/Products.jsx";
import SalesReport from "./components/salesreport/SalesReport.jsx";
import Messages from "./components/messages/Messages.jsx";
import Settings from "./components/settings/Settings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/main",
    element: <Sidebar />,
    children: [
      {
        path: "dashboard",
        element: <DashBoard />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "sales-report",
        element: <SalesReport />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
