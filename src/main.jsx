import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Home from "./Pages/Home.jsx";
import AllCampaign from "./Pages/AllCampaign.jsx";
import AddNewCampaign from "./Pages/AddNewCampaign.jsx";
import MyCampaign from "./Pages/MyCampaign.jsx";
import MyDonations from "./Pages/MyDonations.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Details from "./Pages/Details.jsx";
import UpdateCampaign from "./Pages/UpdateCampaign.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import PrivateSign from "./PrivateRoute/PrivateSign.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-campaign",
        element: <AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaigns')
      },
      {
        path: "/add-new-campaign",
        element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>,
      },
      {
        path: "/my-campaigns/:email",
        element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/my-campaigns/${params.email}`) 
      },
      {
        path: "/my-donations/:email",
        element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/my-donations/${params.email}`)
      },
      {
        path: "/login",
        element: <PrivateSign><Login></Login></PrivateSign>,
      },
      {
        path: "/register",
        element: <PrivateSign><Register></Register></PrivateSign>,
      },
      {
        path: "/campaigns/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
      },
      {
        path: "/update-campaign/:id",
        element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/campaigns/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
